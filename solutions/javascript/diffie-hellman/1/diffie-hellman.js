export class DiffieHellman {
    constructor(p, g) {
        if (!(is_prime(p) && is_prime(g)))
            throw new Error();
        this.p = p;
        this.g = g;
    }

    static getPrivateKey(p) {
        return Math.floor(Math.random() * (p - 1)) + 1;
    }

    getPublicKey(privateKey) {
        if (privateKey <= 1 || privateKey >= this.p)
            throw new Error();
        return modpow(this.g, privateKey, this.p);
    }

    getSecret(theirPublicKey, myPrivateKey) {
        return modpow(theirPublicKey, myPrivateKey, this.p);
    }
}

function modpow(a, b, n) {
    a = a % n;
    let result = 1;
    let x = a;

    while (b > 0) {
        const lsb = b & 1;
        b = Math.floor(b / 2);
        if (lsb == 1)
            result = result * x % n;
        x = x * x % n;
    }
    return result;
}

function is_prime(n) {
    for (let d = 2; d * d <= n; d++) {
        if (n % d == 0)
            return false;
    }
    return true;
}