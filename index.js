window.addEventListener('load', function () {
    var energy = 0;
    var status = '';
    var flag1 = false;
    var v1 = document.getElementById('v1');
    var v2 = document.getElementById('v2');
    var v3 = document.getElementById('v3');
    var v4 = document.getElementById('v4');
    var info = document.getElementById('info');
    var electro = document.getElementById('electro');
    var winddir = document.getElementById('winddir');
    var getDirection = document.getElementById('windDirection');
    var windSpeed = 2;
    var mass = [];
    var b = 0;
    var intervalID = null;
    var intervalID1= null;
    var bladesArray = [v1, v2, v3, v4];
    var stop = document.getElementsByClassName('blades');
    var windDirection = document.getElementById('windDirection').value;
    function intervalManager(flag, set, time) {
        if (flag)
            intervalID = setInterval(set, time);
        else
            clearInterval(intervalID);
    }
    function intervalManager1(flag, energySpend, time) {
        if (flag)
        intervalID1 = setInterval(energySpend, time);
        else
            clearInterval(intervalID1);
            electro.innerHTML = "Electricity: off";
    }
    
    if (windSpeed <= 1.8 && windSpeed >= 0.6) {
        v1.style.animationDuration = windSpeed + "s";
        v2.style.animationDuration = windSpeed + "s";
        v3.style.animationDuration = windSpeed + "s";
        v4.style.animationDuration = windSpeed + "s";
    }
    else {
        v1.style.animationDuration = 0 + "s";
        v2.style.animationDuration = 0 + "s";
        v3.style.animationDuration = 0 + "s";
        v4.style.animationDuration = 0 + "s";
    }
    var range = document.getElementById('i-range').addEventListener('click', function () {
        windDirection="North";
        winddir.innerHTML = "DIRECTION: North"
        getDirection.value = 0;

        console.log( getDirection);
        info.innerHTML=''
        function set() {
            energy = energy + ((Math.floor(b * 100) / 100) * 10);
            console.log(energy);
            document.getElementById('energy').innerHTML = `ENERGY:${parseFloat(energy.toFixed(3))} KW*H`;
            if (energy >= 170) {
                document.getElementById('red0').style.visibility = 'visible';
            }
            if (energy >= 340) {
                document.getElementById('red0').style.visibility = 'visible';
                document.getElementById('red1').style.visibility = 'visible';
            }
            if (energy >= 510) {
                document.getElementById('red0').style.visibility = 'visible';
                document.getElementById('red1').style.visibility = 'visible';
                document.getElementById('red2').style.visibility = 'visible';
            }
            if (energy >= 680) {
                document.getElementById('red0').style.visibility = 'visible';
                document.getElementById('red1').style.visibility = 'visible';
                document.getElementById('red2').style.visibility = 'visible';
                document.getElementById('green0').style.visibility = 'visible';
            }
            if (energy >= 850) {
                document.getElementById('red0').style.visibility = 'visible';
                document.getElementById('red1').style.visibility = 'visible';
                document.getElementById('red2').style.visibility = 'visible';
                document.getElementById('green0').style.visibility = 'visible';
                document.getElementById('green1').style.visibility = 'visible';
            }
            if (energy >= 1000) {
                document.getElementById('red0').style.visibility = 'visible';
                document.getElementById('red1').style.visibility = 'visible';
                document.getElementById('red2').style.visibility = 'visible';
                document.getElementById('green0').style.visibility = 'visible';
                document.getElementById('green1').style.visibility = 'visible';
                document.getElementById('green2').style.visibility = 'visible';
                document.getElementById('energy').innerHTML = `ENERGY:1000 KW*H`;
            }
        }
        function energySpend() {
            if (energy >= 1 && energy < 1000) {
                energy = energy - 2.5;
                electro.innerHTML='Electricity: on'
                document.getElementById('energy').innerHTML = `ENERGY:${parseFloat(energy.toFixed(3))} KW*H`;

                if (energy <170) {
                    document.getElementById('red0').style.visibility = 'hidden';
                }
                if (energy>170 && energy < 340) {

                    document.getElementById('red1').style.visibility = 'hidden';
                }
                if (energy>340 && energy < 510) {
    ;
                    document.getElementById('red2').style.visibility = 'hidden';
                }
                if (energy>510 && energy < 680) {
           
                    document.getElementById('green0').style.visibility = 'hidden';
                }
                if (energy>680 && energy < 850) {

                    document.getElementById('green2').style.visibility = 'hidden';
                }
                if (energy < 1000) {
                    document.getElementById('green2').style.visibility = 'hidden';
                    document.getElementById('energy').innerHTML = `ENERGY:1000 KW*H`;
                }
                    document.getElementById('energy').innerHTML = `ENERGY:${parseFloat(energy.toFixed(3))} KW*H`;
                
    
            } 
            else if(energy>1000){
                info.innerHTML="Battery is full."
                energy=1000;
                energy = energy - 1;
            }
            else {
                document.getElementById('energy').innerHTML = `ENERGY:0 KW*H`;
            }
        }


        var windDirection = document.getElementById('windDirection').addEventListener('change',function(){
            var windDirectionValue = document.getElementById('windDirection').value;
            if(windDirectionValue=="North"){
                winddir.innerHTML = "DIRECTION: North"
                v1.style.animationDuration = windSpeed + "s";
                v2.style.animationDuration = windSpeed + "s";
                v3.style.animationDuration = windSpeed + "s";
                v4.style.animationDuration = windSpeed + "s";
                if(windSpeed>0){
                    intervalManager(true, set, 1000);
                }

            }
            else if(windDirectionValue=="North-West"){
                winddir.innerHTML = "DIRECTION: North-West"
                v1.style.animationDuration = windSpeed + "s";
                v2.style.animationDuration = windSpeed + "s";
                v3.style.animationDuration = windSpeed + "s";
                v4.style.animationDuration = windSpeed + "s";
                if(windSpeed>0){
                    intervalManager(true, set, 1000);
                }
            }
            else if(windDirectionValue=="North-East"){
                winddir.innerHTML = "DIRECTION: North-East"
                v1.style.animationDuration = windSpeed + "s";
                v2.style.animationDuration = windSpeed + "s";
                v3.style.animationDuration = windSpeed + "s";
                v4.style.animationDuration = windSpeed + "s";
                if(windSpeed>0){
                    intervalManager(true, set, 1000);
                }
            }
           else if(windDirectionValue=="West"){
                winddir.innerHTML = "DIRECTION: West"
                v1.style.animationDuration = 0 + "s";
                v2.style.animationDuration = 0 + "s";
                v3.style.animationDuration = 0 + "s";
                v4.style.animationDuration = 0 + "s";
                intervalManager(false);
                

            }
            else if(windDirectionValue=="East"){
                winddir.innerHTML = "DIRECTION: East"
                v1.style.animationDuration = 0 + "s";
                v2.style.animationDuration = 0 + "s";
                v3.style.animationDuration = 0 + "s";
                v4.style.animationDuration = 0 + "s";
                intervalManager(false);
            }
            else if(windDirectionValue=="South"){
                winddir.innerHTML = "DIRECTION: South"
                v1.style.animationDuration = 0 + "s";
                v2.style.animationDuration = 0 + "s";
                v3.style.animationDuration = 0 + "s";
                v4.style.animationDuration = 0 + "s";
                intervalManager(false);
            }
            else if(windDirectionValue=="South-East"){
                winddir.innerHTML = "DIRECTION: South-East"
                v1.style.animationDuration = 0 + "s";
                v2.style.animationDuration = 0 + "s";
                v3.style.animationDuration = 0 + "s";
                v4.style.animationDuration = 0 + "s";
                intervalManager(false);
    
            }
            else if(windDirectionValue=="South-West"){
                winddir.innerHTML = "DIRECTION: South-West"
                v1.style.animationDuration = 0 + "s";
                v2.style.animationDuration = 0 + "s";
                v3.style.animationDuration = 0 + "s";
                v4.style.animationDuration = 0 + "s";
                intervalManager(false);
    
            }
            
        });
        intervalManager(false);
        intervalManager(true, set, 1000);
        mass = [];
        windSpeed = this.value;
        mass.push(windSpeed);
        for (var i = 0; i < mass.length; i++) {
            if (mass[i] == windSpeed) {
                var b = 2 - mass[i];
                document.getElementById('windspeed').innerHTML = `Wind speed: ${b} km/h`;
            }
        }


        document.getElementById('stop-all').addEventListener('click', function () {
            bladesArray.forEach(element => {
                element.style.animationDuration = '0s'
                intervalManager(false);
                info.innerHTML='The windmills are stopped...'
            });
        });
        if (windSpeed <= 1.8 && windSpeed >= 0.6) {
            v1.style.animationDuration = windSpeed + "s";
            v2.style.animationDuration = windSpeed + "s";
            v3.style.animationDuration = windSpeed + "s";
            v4.style.animationDuration = windSpeed + "s";
            info.innerHTML = ""
        }
        if(windSpeed<0.6) {
            v1.style.animationDuration = 0 + "s";
            v2.style.animationDuration = 0 + "s";
            v3.style.animationDuration = 0 + "s";
            v4.style.animationDuration = 0 + "s";
            intervalManager(false);
            info.innerHTML = "The wind is too strong..."
        }
        
        if(windSpeed>1.8){
            v1.style.animationDuration = 0 + "s";
            v2.style.animationDuration = 0 + "s";
            v3.style.animationDuration = 0 + "s";
            v4.style.animationDuration = 0 + "s";
            intervalManager(false);
            info.innerHTML = "Not enough wind power..."
        }
        document.getElementById('on-off').onclick = function () {
            console.log(flag1);
            if (flag1 == false) {
                intervalManager1(true, energySpend, 1000);
                flag1 = true;
            }
            else {
                intervalManager1(false);
                flag1 = false;
            }
        };

        document.getElementById('reset').addEventListener('click', function () {
            energy=0;
            document.getElementById('energy').innerHTML = `ENERGY:${parseFloat(energy.toFixed(3))} KW*H`;
            document.getElementById('red0').style.visibility = 'hidden';
                document.getElementById('red1').style.visibility = 'hidden';
                document.getElementById('red2').style.visibility = 'hidden';
                document.getElementById('green0').style.visibility = 'hidden';
                document.getElementById('green1').style.visibility = 'hidden';
                document.getElementById('green2').style.visibility = 'hidden';
            console.log(energy);
        });
       
    });

    

})
