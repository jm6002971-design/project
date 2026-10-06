import { Common } from '../../modules/common'; 

export interface GameRoundDataInfo {
    gameDa: string;
    gameRoundId: number;
    roundStep: number;
    stepDate: string;
}

export interface GameRoundInfo {
    compPoints: number;
    jackpotFee: number;
    num: number;
    players: number;
    pot: number;
    rake: number;
    startDate: string;
    stepCount: number;
    tableId: number;
}

export interface PlayerRoundDataInfo {
    balance: number;
    bet: number;
    payout: number;
    playerRoundId: number;
    roundStep: number;
    stepDate: string;
}

export interface PlayerRoundInfo {
    balance: number;
    bet: number;
    bonusBet: number;
    compPoints: number;
    convertedJackpotFee: number;
    gameRoundId: number;
    id: number;
    jackpotFee: number;
    jackpotPayout: number;
    num: number;
    payout: number;
    rake: number;
    sessionId: number;
    startDate: string;
    stepCount: number;
}

export interface RoundInfo {
    gameRoundDataInfos: GameRoundDataInfo[];
    gameRoundInfo: GameRoundInfo;
    playerRoundDataInfos: PlayerRoundDataInfo[];
    playerRoundInfo: PlayerRoundInfo;
}

export interface SessionInfo {
    bets: number;
    bonusBets: number;
    bonusBuyIn: number;
    buyIn: number;
    casinoRevenue: number;
    compPoints: number;
    convertedJackpotFee: number;
    detalization: string;
    finishDate: string;
    gameId: number;
    jackpotFee: number;
    jackpotPayout: number;
    payouts: number;
    playerId: number;
    referenceId: number;
    roundsCount: number;
    startDate: string;
    status: string;
    tableId: number;
}

export interface TableInfo {
    casinoRevenue: number;
    finishDate: string;
    gameId: number;
    name: string;
    referenceId: number;
    roundsCount: number;
    startDate: string;
    tableId: string;
}

export interface Value {
    roundInfo: RoundInfo[];
    sessionInfo: SessionInfo;
    tableInfo: TableInfo;
}

export interface PokerGameHistory extends Common {
    success: boolean;
    values: Value[];
}




export interface GameHistory extends Common {
    total: number;
    values: Value[];
}
export interface Value {
    bet: string;
    buyIn: string;
    closingBalance: string;
    from: string;
    gameId: string;
    gameRounds: string;
    groupId: string;
    id: string;
    initialBalance: string;
    name: string;
    payouts: string;
    to: string;
    wallet: string;
    win: string;
}
