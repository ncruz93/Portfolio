const {createApp} = Vue;

const app = createApp(App);

createApp({
    data() {
        return {
            message: "hello"
        }
    }
}).mount("#app")
// createApp({
//     data() {
//         return {
//           items: [
//             { text: 'Home', link: "index.html" },
//             { text: 'Gallery', link:"gallery.html"}
//         ]
//         }
//       }   
// }).mount("#navBar")


// createApp({
//     data() {
//         return {
//           sources:[
//             'images/Suvi_on_hike.jpg',
//             'images/Luna_toy.jpg',
//             'images/Suvi_smiling.jpg',
//             'images/Luna_Snow.jpg',
//             'images/dogs_in_a_box.jpg',
//             'images/Luna_Snow_Landscape.jpg',
//             'images/Maui_Sunrise.jpg',
//             'Images/beach.jpg',
//             'images/img9.jpgimages/Luna_bed.jpg',
//             'Images/Suvi_Luna.jpg',
//             'images/Suvi_hikeHop.jpg'
//           ]
//         }
//       },
//       methods: {
//         show_current_source: data(source){
//           console.log(`Current Source: ${source}`)
//         }
//       }
// })