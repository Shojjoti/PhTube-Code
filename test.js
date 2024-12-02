function testTimeString(time)
{
    const hour = parseInt(time/3600);
    let remainderSecond = time % 3600 ; 
    const minute = parseInt(remainderSecond/60); 
    remainderSecond =     (remainderSecond % 60) ;
    return `${hour} hour ${minute} minute ${remainderSecond} second ago` ;
}
console.log(testTimeString(7865));