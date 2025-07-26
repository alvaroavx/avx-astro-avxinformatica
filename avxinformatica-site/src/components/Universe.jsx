// src/components/Universe.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';               // HDR loader
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'; // Post-procesador
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';         // Render original
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'; // Bloom effect

export default function Universe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1) Escena y cámara
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // 2) Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // 3) Iluminación
    scene.add(new THREE.AmbientLight(0x404040));                          // luz ambiental
    scene.add(new THREE.HemisphereLight(0xffffbb, 0x080820, 1));          // luz cielo/tierra
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // 4) Planetas básicos
    const planets = [
      { color: 0x1f8ef1, pos: [ 3,  0, -5] },  // Servicios
      { color: 0x28a745, pos: [ 0,  0, -5] },  // Proyectos
      { color: 0xe83e8c, pos: [-3,  0, -5] },  // Contacto
      { color: 0xffc107, pos: [ 0,  3, -5] },  // Nosotros
    ];
    planets.forEach(({ color, pos }) => {
      const geo = new THREE.SphereGeometry(1, 64, 64);
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.5,
        metalness: 0.1
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      scene.add(mesh);
    });

    // SKYBOX
    {
      const loader = new THREE.CubeTextureLoader();
      const cubemap = loader.load([
        '/skybox/px.png',
        '/skybox/nx.png',
        '/skybox/py.png',
        '/skybox/ny.png',
        '/skybox/pz.png',
        '/skybox/nz.png',
      ]);
      scene.background = cubemap;
    }

    // 5) Cargar HDRI como entorno (opcional, si prefieres HDRI)
    new RGBELoader()
      .load('/skybox/galaxy.hdr', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        // scene.background = texture; // si quieres reemplazar skybox por equirectangular
      });

    // 6) Post-procesado: bloom
    const width  = mount.clientWidth;
    const height = mount.clientHeight;

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(
      new UnrealBloomPass(
        new THREE.Vector2(width, height),
        1.2, 0.4, 0.85
      )
    );

    // 7) Animación
    const animate = () => {
      requestAnimationFrame(animate);
      composer.render();  // usar composer para incluir bloom
    };
    animate();

    // 8) Ajuste al cambiar tamaño
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      composer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
}
