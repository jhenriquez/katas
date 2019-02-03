package buildPileOfCubes_test

import (
	"testing"
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestBuildPileOfCubes(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "BuildPileOfCubes Suite")
}
