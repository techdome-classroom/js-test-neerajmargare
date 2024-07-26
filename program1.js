const getTotalIsles = function(grid) {
  if (grid.length === 0) return 0;
  
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const dfs = (row, col) => {
      
      const directions = [
          [-1, 0], // up
          [1, 0],  // down
          [0, -1], // left
          [0, 1]   // right
      ];
      
      
      const stack = [[row, col]];
      while (stack.length > 0) {
          const [currentRow, currentCol] = stack.pop();
          if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols || grid[currentRow][currentCol] === 'W' || visited[currentRow][currentCol]) {
              continue;
          }
          visited[currentRow][currentCol] = true;
         
          for (const [rOffset, cOffset] of directions) {
              stack.push([currentRow + rOffset, currentCol + cOffset]);
          }
      }
  };

  let islandCount = 0;

 
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L' && !visited[i][j]) {
              
              dfs(i, j);
              islandCount++;
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
