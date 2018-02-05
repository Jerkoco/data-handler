var datab = [
    {
        title: "machin",
        childs: [
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: ["image.jpg", "porn.mp4"]
        },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            }
        ]
}, {
        title: "bidule",
        childs: [
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []
        },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            }
        ]
}, {
        title: "trucmuche",
        childs: [
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []
        },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            }
        ]
},
    {
        title: "trucmuche",
        childs: [
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []
        },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            }
        ]
},
    {
        title: "trucmuche",
        childs: [
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []
        },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            }
        ]
},
    {
        title: "trucmuche",
        childs: [
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []
        },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            }
        ]
},
    {
        title: "trucmuche",
        childs: [
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []
        },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            }
        ]
},
    {
        title: "trucmuche",
        childs: [
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []
        },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            }
        ]
},
    {
        title: "trucmuche",
        childs: [
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []
        },
            {
                title: "lorem",
                content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                files: []

            }
        ]
}
];


var app = new Vue({
    el: "#app",
    data: {
        folders: datab,
        currentFolder: "root",
        isPopupOpen: false
    },
    methods: {
        changeCurrentFolder: function(index) {
            this.$data.currentFolder = this.$data.folders[index];
        },
        goRoot: function() {
            this.$data.currentFolder = "root";
            this.$data.isPopupOpen = false;
        },
        addnew: function() {
            this.$data.isPopupOpen = true;
            if (this.$data.currentFolder == 'root') {
                // creates new folder
            } else {
                // creates new sheet
            }
        }
    }
});
