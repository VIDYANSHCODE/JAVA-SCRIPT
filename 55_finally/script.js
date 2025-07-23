const f = () => {
  try {
    let a = 0;
    // console.log(prg);
    console.log("prg run successful");
    return                   // finally even works even we write return

  } catch (error) {
    console.log("this is an error");
    console.log(p);
  } finally {
    console.log("i am a good boy");
    //   operations used in finally
    //   exit the loop
    //  write to the log file
  }
};

f()
