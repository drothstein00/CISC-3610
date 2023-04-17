function calWeight() {
    const weight = document.getElementById("weight").value;
    const planet = document.getElementById("planet").value;
    let gravity;
  
    switch (planet) {
      case "Mercury":
        gravity = 0.378;
        break;
      case "Venus":
        gravity = 0.907;
        break;
      case "Mars":
        gravity = 0.377;
        break;
      case "Jupiter":
        gravity = 2.36;
        break;
      case "Saturn":
        gravity = 0.916;
        break;
      case "Uranus":
        gravity = 0.889;
        break;
      case "Neptune":
        gravity = 1.12;
        break;
      case "Pluto":
        gravity = 0.071;
        break;
      default:
        gravity = 1;
    }
    const weightOnPlanet = weight * gravity;
    document.getElementById("weight-on-planet").innerHTML = "Your weight on " + planet + " is " + weightOnPlanet.toFixed(2) + " pounds.";
  }

  function calDogYears() {
    const age = document.getElementById("scienceage").value;
    const dogYears = age * 7;
    document.getElementById("dogyears").innerHTML = "Your age in dog years is " + dogYears + ".";
}

function calTemperature() {
    const fahrenheit = document.getElementById("tempfahrenheit").value;
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("tempcelsius").innerHTML = fahrenheit + "°F is " + celsius.toFixed(1) + "°C.";
}

function calInterest() {
    
    var principal = parseFloat(document.getElementById("loanamount").value);
    var rate = parseFloat(document.getElementById("interestrate").value) / 100;
    var years = parseFloat(document.getElementById("loanterm").value);
  
    var monthlyRate = rate / 12;
    var months = years * 12;
    var interest = principal * monthlyRate * months;
  
    document.getElementById("interest").innerHTML = "The interest on a $" + principal.toFixed(2) + " loan over " + years + " years at " + (rate * 100) + "% interest is $" + interest.toFixed(2);
  }

  function resetFields() {
    document.querySelectorAll('input, select').forEach((el) => (el.value = ''));
    document.querySelectorAll('p').forEach((el) => (el.textContent = ''));
  }

  function showImage(imageName) {
    var header = document.querySelector('header');
    if (header.style.backgroundImage.includes(imageName)) {
      header.style.backgroundImage = '';
    } else {
      header.style.backgroundImage = 'url(' + imageName + ')';
      header.style.backgroundSize = 'contain';
    }
  }