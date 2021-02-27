
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){return []}
newmatrix=[]

for (let i=0;i<matrix.length;i++){
  if (i%2==0) {up(matrix[i])}
  else {down(matrix[i])}
    
    }
  console.log(newmatrix)
return newmatrix
}

function up(mat){
for (let i=0;i<mat.length;i++){
newmatrix.push(mat[i])
}
}

function down(mat){
  for (let i=mat.length-1;i>=0;i--){
    newmatrix.push(mat[i])
  }
}