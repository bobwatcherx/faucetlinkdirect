   let directlink = "https://glitteringpace.com/bD3.Vz0-Pv3/pevfbNm_ViJcZ/DB0/1BMlj/ET4hMmzcQT4yLxT/UTy/MGTsgTzfNWD/kz"
    let isclick = true


 // Function to get URL parameter value by name
    function getUrlParameter(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    // Get the value of "s" parameter from URL
    var sParameter = getUrlParameter('s');
     var langParameter = getUrlParameter('lang');

    // Translate header based on lang parameter
    if (langParameter === 'en') {
      document.getElementById('header').textContent = 'Click the button below to see the faucet link';
      document.getElementById('btnopen').innerText  = 'Click here to go to faucet link page';
    }

    
    function godirectlink(){
      if(isclick == true){
        window.open(directlink,"_blank")

      }
      isclick = false
      document.getElementById('btnopen').style.display = 'block';
      document.querySelector('embed').style.display = 'none';

    }

    function gofaucetlink(){
        window.open(sParameter,"_blank")

    }