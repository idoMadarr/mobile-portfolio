3D Implementaion:

1. Download gltf file from any 3d site like Sketchfab.com
2. Make sure to intall these packages ahead:
   - @react-three/drei
   - @react-three/fiber
   - three
3. move the files to public folder, and change the name of the .bin and .gltf to name of your choice.
4. inside .gltf serach for "buffers" and change the name as well under "uri": "name.bin".
5. run: npx gltfjsx name.gltf
6. Now we can use our JSX file as a simple component.

NOTICE: The 3D file is exporting with regular expression - we have to change this to export default.
