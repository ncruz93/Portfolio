const {createApp} = Vue;

createApp({
    data() {
        return {
          items: [
            { text: 'Home Page', link: "index.html" },
            { text: 'Gallery', link:"gallery.html"},
            { text: 'Hobbies Page', link: "hobbies.html" },
            { text: 'Bio', link:"bio.html"},
            { text: 'Contact Me', link:"contact.html"}
        ]
        }
      }   
}).mount("#navBar")