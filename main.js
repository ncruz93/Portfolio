const {createApp} = Vue;

createApp({
    data() {
        return {
          items: [
            { text: 'Home Page', link: "index.html" },
            { text: 'Dogs Page', link:"dogs.html"},
            { text: 'Hobbies Page', link: "hobbies.html" },
            { text: 'Gallery', link:"gallery.html"},
            { text: 'Bio', link:"bio.html"},
            { text: 'Resume', link:"resume.html"},
            { text: 'Contact Me', link:"contact.html"},
        ]
        }
      }   
}).mount("#navBar")