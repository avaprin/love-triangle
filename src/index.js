/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count=0;
    var A = [0,...preferences];
    for(let i = 1; i <A.length; ++i)
    {
        if(A[i]!==-1)
        {
            if(A[A[A[i]]]===i && A[i]!=i)
            {
                count++;
                A[A[A[i]]]=-1;
                A[A[i]]=-1;
                A[i]=-1;
            }
        }
    }
    return count;
};
