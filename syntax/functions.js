//const muvelet = (a, b, callback) => {
//    const result = callback(a, b)
//    return {result};
//}

function Muvelet(a, b, callback)
{ 
    const result = callback(a, b)
    return {result};
}

function MuveletLetrehoz(jel)
{
    if(jel == "+")
    {
        return (a, b) => {
            return a + b;
        }
    }
}

export {Muvelet, MuveletLetrehoz}