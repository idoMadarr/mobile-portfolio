3D Implementaion:

1. Download gltf file from any 3d site like Sketchfab.com
2. Make sure to intall these packages ahead:
   - @react-three/drei
   - @react-three/fiber
   - three
3. run: gltf-pipeline -i [scene_file_name].gltf -o [your_name].gltf -d
   => Converting a glTF to Draco glTF
4. run: npx gltfjsx [your_name].gltf --transform
   => This will convert our Draco glTF to JSX file
5. Dont forget to add the [____-transformed] file to the public folder in your react app.
6. Now we can use our JSX file as a simple component.

NOTICE: The 3D file is exporting with regular expression - we can change this to export default just for the convention.
