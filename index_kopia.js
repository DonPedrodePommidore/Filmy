
        function addMovie() {
            var movieTitle = document.getElementById("inputTitle").value;
            var movieYear = document.getElementById("inputYear").value;
            var movieActors = document.getElementById("inputActors").value;

            // Walidacja
            if (movieTitle === "") {
                alert("Movie title cannot be empty");
                return;
            }
            if (movieYear === "") {
                alert("Movie year cannot be empty");
                return;
            }
            if (movieActors === "") {
                alert("Movie actors cannot be empty");
                return;
            }

            // Tworzenie elementu li i dodanie do listy
            var li = document.createElement("li");
            li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", " + movieActors;
            document.getElementById("movieList").appendChild(li);

            // Czyszczenie pól po dodaniu
            document.getElementById("inputTitle").value = "";
            document.getElementById("inputYear").value = "";
            document.getElementById("inputActors").value = "";
        }
        function removeMovie() {
            var list = document.getElementById("movieList");
            var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
            for (var i = 0; i < checkedBoxes.length; i++) {
                var liToRemove = checkedBoxes[i].parentNode;
                list.removeChild(liToRemove);
            }
        }