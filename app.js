/**
 * Created by angeles on 3/5/16.
 */


//2402109a2590eed99da9333342e1c8a1

(function () {

        var getciudad = function getCiudad() {

            var ciudad = document.getElementById('ciudad').value;

            if (ciudad != '') {
                $.ajax({
                        method: "GET",
                        url: "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=2402109a2590eed99da9333342e1c8a1&units=metric",
                    })
                    .done(function (msg) {
                        loadData(msg);
                    });

            } else {

                alert('ciudad no puede estar vacia');
            }
        }
        var loadData = function (msg) {
            var data = msg;
            var pais = $('<p class="pais">' + data.name + '</p>');
            var main = data.main;
            var temp = $('<p class="temp">' + main.temp + '</p>');
            $(".resultado").append(pais).append(temp);

        }

        $('#load').on('click', getciudad);
    }()
);
