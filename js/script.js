
       window.onload = function() {
            // Mostrar primer mensaje después de 5 segundos
            setTimeout(function() {
                const message1 = document.getElementById('message1');
                message1.style.display = 'block';
                message1.classList.add('fadeIn');
            }, 10000); // 10000 milisegundos = 10 segundos

            // Obtener el día y la hora actuales
            const now = new Date();
            const currentDay = now.getDay(); // 0 = Domingo, 4 = Jueves
            const currentHour = now.getHours(); // Hora en formato 24 horas
              
            // Mostrar segundo mensaje solo si es jueves (4) o domingo (0)
            setTimeout(function() {
                const message1 = document.getElementById('message1');
                message1.style.display = 'none'; // Ocultar el primer mensaje

               if ((currentDay === 0 || currentDay === 4) && currentHour >= 19) {
                    const message2 = document.getElementById('message2');
                    message2.style.display = 'block';
                    message2.classList.add('fadeIn');
                }
            }, 20000); // 20000 milisegundos = 20 segundos
        }

        // Función para ocultar el mensaje
        function closeMessage(messageId) {
            const message = document.getElementById(messageId);
            message.style.display = 'none';
        }
 
