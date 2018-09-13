/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   let count=0;
  for(let i = 0; i <preferences.length;)
  {
      if(preferences[i]!==-1)
      {
          if(preferences[preferences[preferences[i]-1]-1]-1===i)
          {
              count++;
              preferences[preferences[preferences[i]-1]-1]=-1;
              preferences[preferences[i]-1]=-1;
              preferences[i]=-1;
              i++;
          }
      }
      else
      {
          i++;
      }
  }
    return count;// your implementation
};
