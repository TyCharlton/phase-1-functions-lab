
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(someValue - hqLocation);
  }
  
  
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    // block = 264 feet long
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    //first 400
    if (distance <= 400) {
      return 0;
    }
    else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    }
    else if (distance <= 2500) {
      return 25;
    }
    else {
      return 'cannot travel that far';
    }
  }
  
  // console logs
  console.log(distanceFromHqInBlocks(50)); 
  console.log(distanceFromHqInFeet(50));   
  console.log(distanceTravelledInFeet(34, 38)); 
  console.log(calculatesFarePrice(34, 38));   
  