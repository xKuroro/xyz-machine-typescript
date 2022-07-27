export default function Regex(ar) {
    const re = /^[XYZ]*$/;
    return re.test(String(ar));
}
