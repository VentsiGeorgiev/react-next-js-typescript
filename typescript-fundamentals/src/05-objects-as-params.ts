function createEmployee({ id }: { id: number }): { id: number; isActive: boolean } {
  const isActive = id > 100
  return { id, isActive }
}

console.log(createEmployee({ id: 99 }))
console.log(createEmployee({ id: 100 }))
console.log(createEmployee({ id: 101 }))
