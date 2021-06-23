// const { response } = require("express");

const searchBtn = document.getElementById('search-btn');
const bookList = document.getElementById('book');

searchBtn.addEventListener('click', getBookList);


function getBookList() {
    let searchInputText = document.getElementById('search-input').value.trim();
    console.log(searchInputText);
    fetch('only_batman.json').then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.keys);
            let html = "";
            if (data) {
                data.forEach(name => {
                    html += `
                <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <div class="card-img-top">
                            <img class="img-fluid" style="height: 200px;"
                                src="${name.image}"
                                alt="">
                        </div>
                        <br>
                        <h3>${name.name}</h3>
                        <a href="" class="btn btn-primary" data-toggle="modal" data-target="#myModal${name.bookid}">FULL INFO</a>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="myModal${name.bookid}">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header d-inline text-center">
                        <h4 class="modal-title">${name.name}</h4>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt inventore ab.
                            Aperiam, eius quos?
                            Ea dicta labore voluptatem et laudantium. At aperiam, illo eum quam distinctio nesciunt iure
                            eos.</p>
                        <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body text-center">
                        <img style="height: 350px;" src="${name.image}" alt="" class="img-fluid">
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
                `
                });
            };
            bookList.innerHTML = html;
        })

}
