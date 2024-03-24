// Code your solution in this file!
const scuberHq = 42;
    const blockDistance = '';
    
     function distanceFromHqInBlocks(blockDistance) {
      
      return Math.abs(blockDistance - scuberHq);
  }
    distanceFromHqInBlocks();

    

    function distanceFromHqInFeet(blockDistance) {
     distanceFromHqInBlocks(blockDistance);

      const distanceInFeet = Math.abs(blockDistance - scuberHq)
      return distanceInFeet * 264;
  
    }
    distanceFromHqInFeet();
    
    function distanceTravelledInFeet(start, destination) {
      return Math.abs(destination - start) * 264;
    }
    distanceTravelledInFeet();

    function calculatesFarePrice(start, destination) {
      const distanceTravelled = Math.abs(destination - start) * 264;
      if (distanceTravelled <= 400) {
        return 0;
      } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * 0.02;
      } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25;
      } else if (distanceTravelled > 2500) {
        return 'cannot travel that far';
      }
    }
    calculatesFarePrice();
    
