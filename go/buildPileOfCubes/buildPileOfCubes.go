package buildPileOfCubes

func FindNb(m int) int {
  acc := 0
  for n := 1; acc < m; n++ {
    acc += (n*n*n)
    if (acc == m) {
      return n 
    }
  }
	return -1
}