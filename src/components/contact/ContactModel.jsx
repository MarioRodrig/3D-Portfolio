import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ContactModel(props) {
  const { nodes, materials } = useGLTF('/contactModel.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.121}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-5.995, 1.977, -1.65]} rotation={[Math.PI, -1.234, Math.PI]} scale={0.857}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Material} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['Material.011']} />
            <mesh geometry={nodes.Object_10.geometry} material={materials['Material.016']} />
            <mesh geometry={nodes.Object_11.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.005']} />
          </group>
          <group position={[-6.229, 1.969, -1.837]} rotation={[Math.PI, -1.234, Math.PI]} scale={0.713}>
            <mesh geometry={nodes.Object_34.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Object_35.geometry} material={materials['Material.001']} />
          </group>
          <group position={[-7.444, 0.931, 2.487]} rotation={[Math.PI, -1.234, Math.PI / 2]} scale={0.857}>
            <mesh geometry={nodes.Object_47.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_48.geometry} material={materials['Material.005']} />
          </group>
          <group position={[-5.892, 1.057, 0.981]} rotation={[-Math.PI / 2, 0, -1.908]} scale={0.205}>
            <mesh geometry={nodes.Object_66.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Object_67.geometry} material={materials['Material.015']} />
          </group>
          <group position={[-6.129, 1.057, 1.656]} rotation={[-2.211, 0.206, -1.839]} scale={0.205}>
            <mesh geometry={nodes.Object_69.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Object_70.geometry} material={materials['Material.015']} />
          </group>
          <group position={[2.595, 0.067, 2.046]} rotation={[0, 0.469, 0]} scale={[0.32, 0.26, 0.32]}>
            <mesh geometry={nodes.Object_82.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.Object_83.geometry} material={materials['Material.028']} />
            <mesh geometry={nodes.Object_84.geometry} material={materials['Material.034']} />
          </group>
          <group position={[2.744, 0.067, 1.739]} rotation={[0, -1.102, 0]} scale={0.224}>
            <mesh geometry={nodes.Object_92.geometry} material={materials['Material.020']} />
            <mesh geometry={nodes.Object_93.geometry} material={materials['Material.032']} />
          </group>
          <group position={[2.504, 0.338, 2.077]} rotation={[0, 0.747, 0]} scale={[0.32, 0.26, 0.32]}>
            <mesh geometry={nodes.Object_97.geometry} material={materials['Material.018']} />
            <mesh geometry={nodes.Object_98.geometry} material={materials['Material.028']} />
            <mesh geometry={nodes.Object_99.geometry} material={materials['Material.034']} />
          </group>
          <group position={[2.81, 0.338, 2.009]} rotation={[0, -0.824, 0]} scale={0.224}>
            <mesh geometry={nodes.Object_105.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_106.geometry} material={materials['Material.017']} />
          </group>
          <group position={[2.823, 0.291, 2.755]} rotation={[-0.08, -0.797, -0.417]} scale={[0.32, 0.26, 0.32]}>
            <mesh geometry={nodes.Object_110.geometry} material={materials['Material.035']} />
            <mesh geometry={nodes.Object_111.geometry} material={materials['Material.028']} />
            <mesh geometry={nodes.Object_112.geometry} material={materials['Material.034']} />
            <mesh geometry={nodes.Object_113.geometry} material={materials['Material.036']} />
          </group>
          <group position={[2.559, 0.202, 2.08]} rotation={[0, 0.126, 0]} scale={[0.32, 0.26, 0.32]}>
            <mesh geometry={nodes.Object_121.geometry} material={materials['Material.025']} />
            <mesh geometry={nodes.Object_122.geometry} material={materials['Material.028']} />
            <mesh geometry={nodes.Object_123.geometry} material={materials['Material.034']} />
          </group>
          <group position={[2.801, 0.202, 1.841]} rotation={[0, -1.445, 0]} scale={0.224}>
            <mesh geometry={nodes.Object_129.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Object_130.geometry} material={materials['Material.012']} />
          </group>
          <group position={[2.745, 0.231, -1.002]} rotation={[0, -0.325, 0]} scale={0.734}>
            <mesh geometry={nodes.Object_132.geometry} material={materials['Material.033']} />
            <mesh geometry={nodes.Object_133.geometry} material={materials['Material.032']} />
            <mesh geometry={nodes.Object_134.geometry} material={materials['Material.031']} />
            <mesh geometry={nodes.Object_135.geometry} material={materials['Material.030']} />
            <mesh geometry={nodes.Object_136.geometry} material={materials['Material.029']} />
            <mesh geometry={nodes.Object_137.geometry} material={materials['Material.028']} />
          </group>
          <group position={[-2.863, 0.082, 2.344]} rotation={[0, 0.589, 0]} scale={0.499}>
            <mesh geometry={nodes.Object_161.geometry} material={materials['Material.034']} />
            <mesh geometry={nodes.Object_162.geometry} material={materials['Material.025']} />
            <mesh geometry={nodes.Object_163.geometry} material={materials['Material.037']} />
            <mesh geometry={nodes.Object_164.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_165.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.Object_166.geometry} material={materials['Material.029']} />
          </group>
          <group position={[-2.863, 0.073, 2.344]} rotation={[0, 0.589, 0]} scale={0.384}>
            <mesh geometry={nodes.Object_168.geometry} material={materials['Material.034']} />
            <mesh geometry={nodes.Object_169.geometry} material={materials['Material.005']} />
          </group>
          <group position={[-1.262, 0.373, -2.484]} rotation={[0, 0.313, 0]} scale={1.871}>
            <mesh geometry={nodes.Object_207.geometry} material={materials['Material.025']} />
            <mesh geometry={nodes.Object_208.geometry} material={materials['Material.024']} />
            <mesh geometry={nodes.Object_209.geometry} material={materials['Material.023']} />
            <mesh geometry={nodes.Object_210.geometry} material={materials['Material.022']} />
          </group>
          <group position={[-2.096, 0.961, -2.214]} rotation={[0.359, 0.294, -0.108]} scale={1.871}>
            <mesh geometry={nodes.Object_212.geometry} material={materials['Material.021']} />
            <mesh geometry={nodes.Object_213.geometry} material={materials['Material.023']} />
          </group>
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.018']} position={[-1.262, 0.373, -2.484]} rotation={[0, 0.313, 0]} scale={1.871} />
          <mesh geometry={nodes.Object_14.geometry} material={materials['Material.009']} position={[-6.114, 1.977, -1.311]} rotation={[Math.PI, -1.234, Math.PI]} scale={0.857} />
          <mesh geometry={nodes.Object_16.geometry} material={materials['Material.001']} position={[-6.134, 1.977, -1.255]} rotation={[Math.PI, -1.234, Math.PI]} scale={0.857} />
          <mesh geometry={nodes.Object_18.geometry} material={materials['Material.004']} position={[-6.134, 2.18, -1.255]} rotation={[Math.PI, -1.234, Math.PI]} scale={0.857} />
          <mesh geometry={nodes.Object_20.geometry} material={materials['Material.001']} position={[-5.963, 1.977, -1.743]} rotation={[Math.PI, -1.234, Math.PI]} scale={0.857} />
          <mesh geometry={nodes.Object_22.geometry} material={materials['Material.009']} position={[-6.067, 1.977, -1.446]} rotation={[Math.PI, -1.234, Math.PI]} scale={0.857} />
          <mesh geometry={nodes.Object_24.geometry} material={materials['Material.009']} position={[-6.067, 1.977, -1.446]} rotation={[Math.PI, -1.234, Math.PI]} scale={0.857} />
          <mesh geometry={nodes.Object_26.geometry} material={materials['Material.010']} position={[-6.887, 2.344, 2.25]} rotation={[Math.PI, -1.234, Math.PI]} scale={0.28} />
          <mesh geometry={nodes.Object_28.geometry} material={materials['Material.010']} position={[-6.009, 2.344, 2.558]} rotation={[-Math.PI, -1.234, 2.614]} scale={0.28} />
          <mesh geometry={nodes.Object_30.geometry} material={materials['Material.014']} position={[-9.396, 0.664, 2.676]} rotation={[Math.PI, -1.234, Math.PI]} scale={[0.027, 0.194, 0.027]} />
          <mesh geometry={nodes.Object_32.geometry} material={materials['Material.007']} position={[-5.963, 1.977, -1.743]} rotation={[Math.PI, -1.234, Math.PI]} scale={0.857} />
          <mesh geometry={nodes.Object_37.geometry} material={materials['Material.003']} position={[-6.009, 2.344, 2.558]} rotation={[-Math.PI, -1.234, 2.614]} scale={0.28} />
          <mesh geometry={nodes.Object_39.geometry} material={materials['Material.014']} position={[-8.696, 1.326, 0.676]} rotation={[-Math.PI, -1.234, 2.607]} scale={[0.027, 0.198, 0.027]} />
          <mesh geometry={nodes.Object_41.geometry} material={materials['Material.001']} position={[-6.227, 1.977, -1.844]} rotation={[Math.PI, -1.234, Math.PI / 2]} scale={0.857} />
          <mesh geometry={nodes.Object_43.geometry} material={materials['Material.005']} position={[-6.292, 1.977, -1.657]} rotation={[Math.PI, -1.234, Math.PI / 2]} scale={0.857} />
          <mesh geometry={nodes.Object_45.geometry} material={materials['Material.004']} position={[-8.041, 2.17, 3.337]} rotation={[Math.PI, -1.234, Math.PI / 2]} scale={[1.48, 3.133, 1.48]} />
          <mesh geometry={nodes.Object_50.geometry} material={materials['Material.003']} position={[-7.444, 0.931, 2.487]} rotation={[Math.PI, -1.234, Math.PI / 2]} scale={0.857} />
          <mesh geometry={nodes.Object_52.geometry} material={materials['Material.005']} position={[-8.818, 1.106, 2.408]} rotation={[-Math.PI, -1.234, 2.965]} scale={0.188} />
          <mesh geometry={nodes.Object_54.geometry} material={materials['Material.011']} position={[-8.825, 1.232, 2.429]} rotation={[-Math.PI, -1.234, 2.965]} scale={0.145} />
          <mesh geometry={nodes.Object_56.geometry} material={materials['Material.005']} position={[-8.623, 1.211, 1.853]} rotation={[-Math.PI, -1.234, 2.965]} scale={0.188} />
          <mesh geometry={nodes.Object_58.geometry} material={materials['Material.012']} position={[-8.631, 1.337, 1.874]} rotation={[-Math.PI, -1.234, 2.965]} scale={0.145} />
          <mesh geometry={nodes.Object_60.geometry} material={materials['Material.014']} position={[-5.995, 1.977, -1.65]} rotation={[Math.PI, -1.234, Math.PI]} scale={0.857} />
          <mesh geometry={nodes.Object_62.geometry} material={materials['Material.005']} position={[-6.132, 1.057, 0.897]} rotation={[-Math.PI / 2, 0, -1.908]} scale={0.205} />
          <mesh geometry={nodes.Object_64.geometry} material={materials['Material.005']} position={[-6.369, 1.057, 1.573]} rotation={[-Math.PI / 2, 0, -1.908]} scale={0.205} />
          <mesh geometry={nodes.Object_72.geometry} material={materials['Material.008']} position={[-7.736, 0.704, 4.218]} rotation={[-1.851, -1.016, 2.688]} scale={0.857} />
          <mesh geometry={nodes.Object_74.geometry} material={materials['Material.013']} position={[-6.025, 1.977, -1.686]} rotation={[Math.PI / 2, 0, 1.908]} scale={0.857} />
          <mesh geometry={nodes.Object_76.geometry} material={materials['Material.013']} position={[-6.003, 1.977, -1.653]} rotation={[Math.PI / 2, 0, 1.908]} scale={0.857} />
          <mesh geometry={nodes.Object_78.geometry} material={materials['Material.006']} position={[-7.154, 2.386, -0.936]} rotation={[Math.PI / 2, 0, 1.908]} scale={0.506} />
          <mesh geometry={nodes.Object_80.geometry} material={materials['Material.006']} position={[-5.535, 2.386, -0.37]} rotation={[Math.PI / 2, 0, -1.234]} scale={0.506} />
          <mesh geometry={nodes.Object_86.geometry} material={materials['Material.030']} position={[2.691, 0.067, 2.243]} rotation={[0, 0.469, 0]} scale={[0.426, 0.028, 0.007]} />
          <mesh geometry={nodes.Object_88.geometry} material={materials['Material.004']} position={[2.511, 0.067, 2.248]} rotation={[0, 0.469, 0]} scale={0.32} />
          <mesh geometry={nodes.Object_90.geometry} material={materials['Material.030']} position={[2.743, 0.11, 1.773]} rotation={[0, -1.257, 0]} scale={0.204} />
          <mesh geometry={nodes.Object_95.geometry} material={materials['Material.030']} position={[2.57, 0.38, 1.774]} rotation={[0, -0.978, 0]} scale={0.204} />
          <mesh geometry={nodes.Object_101.geometry} material={materials['Material.030']} position={[2.65, 0.338, 2.24]} rotation={[0, 0.747, 0]} scale={[0.426, 0.028, 0.007]} />
          <mesh geometry={nodes.Object_103.geometry} material={materials['Material.004']} position={[2.478, 0.338, 2.294]} rotation={[0, 0.747, 0]} scale={0.32} />
          <mesh geometry={nodes.Object_108.geometry} material={materials['Material.030']} position={[3.124, 0.231, 2.815]} rotation={[-2.734, -0.548, -2.804]} scale={0.204} />
          <mesh geometry={nodes.Object_115.geometry} material={materials['Material.030']} position={[2.664, 0.304, 2.906]} rotation={[-0.08, -0.797, -0.417]} scale={[0.426, 0.028, 0.007]} />
          <mesh geometry={nodes.Object_117.geometry} material={materials['Material.004']} position={[2.615, 0.357, 2.741]} rotation={[-0.08, -0.797, -0.417]} scale={0.32} />
          <mesh geometry={nodes.Object_119.geometry} material={materials['Material.030']} position={[2.789, 0.245, 1.873]} rotation={[Math.PI, -1.542, Math.PI]} scale={0.204} />
          <mesh geometry={nodes.Object_125.geometry} material={materials['Material.030']} position={[2.583, 0.202, 2.298]} rotation={[0, 0.126, 0]} scale={[0.426, 0.028, 0.007]} />
          <mesh geometry={nodes.Object_127.geometry} material={materials['Material.004']} position={[2.412, 0.202, 2.242]} rotation={[0, 0.126, 0]} scale={0.32} />
          <mesh geometry={nodes.Object_139.geometry} material={materials['Material.029']} position={[1.849, 0.491, -0.738]} rotation={[0, -0.325, 0]} scale={0.734} />
          <mesh geometry={nodes.Object_141.geometry} material={materials['Material.029']} position={[3.575, 0.342, -3.597]} rotation={[0, -0.325, 0]} scale={0.734} />
          <mesh geometry={nodes.Object_143.geometry} material={materials['Material.032']} position={[1.849, 0.491, -0.738]} rotation={[0, -0.325, 0]} scale={0.734} />
          <mesh geometry={nodes.Object_145.geometry} material={materials['Material.029']} position={[1.849, 0.491, -0.738]} rotation={[0.068, -0.324, 0.022]} scale={0.734} />
          <mesh geometry={nodes.Object_147.geometry} material={materials['Material.029']} position={[2.268, 0.344, -2.604]} rotation={[0, -0.325, 0]} scale={[0.146, 0.037, 0.146]} />
          <mesh geometry={nodes.Object_149.geometry} material={materials['Material.029']} position={[2.126, 0.344, -2.183]} rotation={[0, -0.325, 0]} scale={[0.146, 0.037, 0.146]} />
          <mesh geometry={nodes.Object_151.geometry} material={materials['Material.027']} position={[1.849, 0.493, -0.738]} rotation={[0, -0.325, 0]} scale={0.734} />
          <mesh geometry={nodes.Object_153.geometry} material={materials['Material.027']} position={[2.027, 0.611, -1.133]} rotation={[0, -0.266, 0]} scale={0.283} />
          <mesh geometry={nodes.Object_155.geometry} material={materials['Material.026']} position={[4.119, 0.854, -2.6]} rotation={[0, -0.325, 0]} scale={0.578} />
          <mesh geometry={nodes.Object_157.geometry} material={materials['Material.029']} position={[4.119, 0.686, -2.6]} rotation={[0, -0.325, 0]} scale={0.578} />
          <mesh geometry={nodes.Object_159.geometry} material={materials['Material.020']} position={[2.845, 0.675, -2.759]} rotation={[-Math.PI, 0.87, -Math.PI]} scale={0.316} />
          <mesh geometry={nodes.Object_171.geometry} material={materials['Material.025']} position={[-2.863, 0.082, 2.344]} rotation={[0, 0.589, 0]} scale={0.499} />
          <mesh geometry={nodes.Object_173.geometry} material={materials['Material.011']} position={[-2.468, 0.205, 2.567]} rotation={[0, 0.589, 0]} scale={0.499} />
          <mesh geometry={nodes.Object_175.geometry} material={materials['Material.011']} position={[-2.37, 0.205, 2.411]} rotation={[0, 0.589, 0]} scale={0.499} />
          <mesh geometry={nodes.Object_177.geometry} material={materials['Material.024']} position={[-2.651, 0.237, 2.974]} rotation={[0, 0.589, 0]} scale={0.163} />
          <mesh geometry={nodes.Object_179.geometry} material={materials['Material.024']} position={[-2.508, 0.237, 2.878]} rotation={[0, 0.589, 0]} scale={0.163} />
          <mesh geometry={nodes.Object_181.geometry} material={materials['Material.025']} position={[-2.812, 0.002, 1.637]} rotation={[0, 0.589, 0]} scale={0.247} />
          <mesh geometry={nodes.Object_183.geometry} material={materials['Material.025']} position={[-2.498, 0.002, 2.107]} rotation={[0, 0.589, 0]} scale={0.247} />
          <mesh geometry={nodes.Object_185.geometry} material={materials['Material.001']} position={[-2.66, 0.077, 1.807]} rotation={[0, 0.589, 0]} scale={[0.045, 0.009, 0.056]} />
          <mesh geometry={nodes.Object_187.geometry} material={materials['Material.001']} position={[-3.459, 0.196, 2.295]} rotation={[0, 0.589, 0]} scale={[0.045, 0.009, 0.056]} />
          <mesh geometry={nodes.Object_189.geometry} material={materials['Material.011']} position={[-3.369, 0.233, 2.239]} rotation={[0, 0.589, 0]} scale={0.015} />
          <mesh geometry={nodes.Object_191.geometry} material={materials['Material.004']} position={[-2.863, -0.018, 2.344]} rotation={[0, 0.589, 0]} scale={0.499} />
          <mesh geometry={nodes.Object_193.geometry} material={materials['Material.018']} position={[-3.062, 0.243, 2.589]} rotation={[0, 0.589, 0]} scale={0.052} />
          <mesh geometry={nodes.Object_195.geometry} material={materials['Material.018']} position={[-2.861, 0.244, 2.343]} rotation={[0, 0.589, 0]} scale={0.499} />
          <mesh geometry={nodes.Object_197.geometry} material={materials['Material.018']} position={[-2.49, 0.244, 2.82]} rotation={[0, 1.042, 0]} scale={0.21} />
          <mesh geometry={nodes.Object_199.geometry} material={materials['Material.001']} position={[-2.764, 0.066, 1.653]} rotation={[-Math.PI, 0.982, 0]} scale={[-0.039, 0.009, 0.022]} />
          <mesh geometry={nodes.Object_201.geometry} material={materials.leo_fr} position={[-2.189, 0.245, 2.767]} rotation={[0, 0.207, 0]} scale={0.31} />
          <mesh geometry={nodes.Object_203.geometry} material={materials.star} position={[-2.859, 0.244, 1.719]} rotation={[0, 0.041, 0]} scale={0.123} />
          <mesh geometry={nodes.Object_205.geometry} material={materials.star2} position={[-3.213, 0.244, 2.433]} rotation={[0, -0.588, 0]} scale={0.102} />
          <mesh geometry={nodes.Object_215.geometry} material={materials['Material.021']} position={[-1.262, 0.373, -2.484]} rotation={[0, 0.313, 0]} scale={1.871} />
          <mesh geometry={nodes.Object_217.geometry} material={materials['Material.022']} position={[-1.714, 1.125, -3.2]} rotation={[0.665, 0.249, -0.191]} scale={1.784} />
          <mesh geometry={nodes.Object_219.geometry} material={materials['Material.020']} position={[-0.336, 1.08, -3.862]} rotation={[-1.296, -0.05, -1.218]} scale={0.16} />
          <mesh geometry={nodes.Object_221.geometry} material={materials['Material.020']} position={[-0.765, 1.259, -3.626]} rotation={[-2.434, -0.448, -2.936]} scale={0.273} />
          <mesh geometry={nodes.Object_223.geometry} material={materials['Material.019']} position={[-0.431, 1.002, -3.373]} rotation={[-2.531, 0.036, -2.957]} scale={0.184} />
          <mesh geometry={nodes.Object_225.geometry} material={materials['Material.019']} position={[-0.262, 0.879, -3.73]} rotation={[-1.615, -0.162, -1.252]} scale={0.16} />
          <mesh geometry={nodes.Object_227.geometry} material={materials['Material.020']} position={[-0.149, 0.731, -3.464]} rotation={[-1.466, -0.112, -1.232]} scale={0.16} />
          <mesh geometry={nodes.Object_229.geometry} material={materials['Material.017']} position={[-1.686, 0.788, -0.989]} rotation={[-0.551, 0.269, 0.162]} scale={[0.057, 0.034, 0.034]} />
          <mesh geometry={nodes.Object_231.geometry} material={materials['Material.017']} position={[-2.319, 0.198, -1.214]} rotation={[0, -1.258, 0]} scale={[0.033, 0.025, 0.025]} />
          <mesh geometry={nodes.Object_233.geometry} material={materials['Material.002']} position={[-0.445, 0.568, -2.532]} rotation={[0.058, 0.312, -0.018]} scale={[0.424, 0.036, 0.036]} />
          <mesh geometry={nodes.Object_235.geometry} material={materials['Material.024']} position={[-1.484, 0.944, -2.956]} rotation={[0.665, 0.249, -0.191]} scale={0.234} />
          <mesh geometry={nodes.Object_237.geometry} material={materials['Material.021']} position={[-1.828, 1.313, -3.357]} rotation={[0.665, 0.249, -0.191]} scale={0.135} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/contactModel.glb')
