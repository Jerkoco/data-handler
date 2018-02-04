var datab = [
    {
        title: "cryptos",
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
        title: "comptes",
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
        currentFolder: "root"
    },
    methods: {
        changeCurrentFolder: function(index) {
            this.$data.currentFolder = this.$data.folders[index];
        },
        goRoot: function() {
            this.$data.currentFolder = "root";
        },
        addnew: function() {
            if (this.$data.currentFolder == 'root') {
                // creates new folder
            } else {
                // creates new sheet
            }
        }
    }
});
