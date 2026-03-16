class Counter {
  // Property count number = 0
  count: number = 0;

  // Method increment
  increment(): void {
    this.count++; // Increment the count
    console.log(`Count is now: ${this.count}`);
  }

  // Method reset
  reset(): void {
    this.count = 0;
    console.log("Counter reset");
  }
}

// Create instance
const counter = new Counter();

// Call methods
counter.increment();
counter.increment();
counter.reset();