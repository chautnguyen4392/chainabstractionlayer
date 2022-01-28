import Chain from './Chain';
import Swap from './Swap';
import Wallet from './Wallet';

export default class Client<ProviderType = any> {
    private _chain: Chain<ProviderType>;
    private _wallet: Wallet<ProviderType>;
    private _swap: Swap<ProviderType>;

    constructor(chain?: Chain<ProviderType>, wallet?: Wallet<ProviderType>, swap?: Swap<ProviderType>) {
        this._chain = chain;
        this._wallet = wallet;
        this._swap = swap;
    }

    get chain() {
        return this._chain;
    }

    set chain(chain: Chain<ProviderType>) {
        this._chain = chain;
    }

    get wallet() {
        return this._wallet;
    }

    set wallet(wallet: Wallet<ProviderType>) {
        this._wallet = wallet;
    }

    get swap() {
        return this._swap;
    }

    set swap(swap: Swap<ProviderType>) {
        this._swap = swap;
    }
}
