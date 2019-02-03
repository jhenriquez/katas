package buildPileOfCubes_test
import (
  . "github.com/onsi/ginkgo"
  . "github.com/onsi/gomega"
  . "./"
  "math/rand"
  "time"
)

func dotest(n int, exp int) {
    var ans = FindNb(n)
    Expect(ans).To(Equal(exp))
}

func findNbZFG(m int) int {
    var cubeSize int = 0
    n := 0
    for ; cubeSize < m; n++ {
        cubeSize += n * n * n
    }
    if (cubeSize == m) {
        return  n - 1
    } else {
        return - 1
    }
}
func random(min, max int) int {
    return rand.Intn(max - min) + min
}
func randomTesting() {
    rand.Seed(time.Now().UTC().UnixNano())
    for i := 0; i < 50 ; i++ {        
        p := random(100, 5000)   
        u := random(0, 2)
        m := p * p * (p + 1) * (p + 1) / 4 + u
        sol := findNbZFG(m)
        dotest(m, sol)
    }
}

var _ = Describe("Test Example", func() {

    It("should handle basic cases", func() {
        dotest(4183059834009, 2022)
        dotest(24723578342962, -1)
        dotest(135440716410000, 4824)
        dotest(40539911473216, 3568)
        dotest(26825883955641, 3218)
        dotest(41364076483082, -1)
        dotest(9541025211025, 2485)
        dotest(112668204662785, -1)
        dotest(79172108332642, -1)
        dotest(1788719004901, -1)
        dotest(131443152397956, 4788)
        dotest(1801879360282, -1)
        dotest(18262169777476, 2923)
        dotest(11988186060816, 2631)
        dotest(826691919076, 1348)
        dotest(36099801072722, -1)
        dotest(171814395026, -1)
        dotest(637148782657, -1)
        dotest(6759306226, -1)
        dotest(33506766981009, 3402)
        dotest(108806345136785, -1)
        dotest(14601798712901, -1)
        dotest(56454575667876, 3876)
        dotest(603544088161, 1246)
        dotest(21494785321, 541)
        
        dotest(4, -1)
        dotest(16, -1)
    })
    It("should handle random cases", func() {
        randomTesting()
    })
})