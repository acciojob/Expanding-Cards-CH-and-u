//your JS code here. If required.
<script>
            const imageDivs = document.querySelectorAll(".container .image")
            const images = [
                "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
                "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
                "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            ]


            for(let i =0;i<imageDivs.length;i++){
                imageDivs[i].style.backgroundImage =`url(${images[i]})`

                // Add eventlistner to all the images
                imageDivs[i].addEventListener("click",()=>{

                    // Remove class active from all other images
                    imageDivs.forEach((el)=>el.classList.remove("active"))

                    // Add class active to grow flex to 4 to this image
                    imageDivs[i].classList.add("active")
                })
            }
        </script>