export default function Regex(ar: string){
    const re = /^[XYZ]*$/;
    
    return re.test(String(ar));
    
}