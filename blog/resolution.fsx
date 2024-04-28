let even x = x % 2 = 0
let odd x = x % 2 <> 0

let rec gcd a b =
    let rec gcd = function
        | 0, b -> b
        | a, 0 -> a
        | a, b when a = b -> a
        | a, b ->
            if even a then
                if even b then
                    2 * gcd(a / 2, b / 2)
                else
                    gcd(a / 2, b)
            else
                if even b then
                    gcd(a, b / 2)
                else
                    gcd(abs (a - b), min a b)
    gcd (a, b)

let lcm a b = (a * b) / gcd a b

let res =
    let w, h =
        // 1024, 768
        // 1920, 1080
        // 1440, 1080
        // 1404, 1080
        360, 640

    let x = lcm w h
    x / h, x / w
// 320 / x = 1404 / 1080
// float (320 * 1080) / 1404.
(fun k -> 9 * k, 16 * k) 10
