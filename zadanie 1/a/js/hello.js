function generatePermutations() {
    const numsInput = document.getElementById('numsInput');
    const permutationsList = document.getElementById('permutationsList');
  
    const nums = numsInput.value.split(',').map(num => parseInt(num.trim()));
    const permutations = perms(nums);
  
    permutationsList.innerHTML = '';
    permutations.forEach(permutation => {
      const li = document.createElement('li');
      li.textContent = permutation.join(', ');
      permutationsList.appendChild(li);
    });
  
    document.getElementById('input').style.display = 'none';
    document.getElementById('output').style.display = 'block';
  }
  
  function perms(nums) {
    if (nums.length === 0) {
      return [[]];
    }
  
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const remainingNums = nums.filter((_, index) => index !== i);
      const permutations = perms(remainingNums);
      for (let j = 0; j < permutations.length; j++) {
        result.push([currentNum, ...permutations[j]]);
      }
    }
    return result;
  }
