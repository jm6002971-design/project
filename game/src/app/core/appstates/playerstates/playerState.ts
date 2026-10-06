import * as playerActions from './playerActions';
import { Profile } from '../../modules/player/profile';
import { TournamentsList } from '../../modules/player/tournamentsList';
import { Stats } from '../../modules/player/stats';
import { HttpClientError } from '../../modules/login/httpClientError';
import { GameHistoryData } from '../../modules/gamehistory';
import { RemoteGamesHistory } from '../../modules/remotegamehistory/remotegamehistory';
import { PlayerLevel } from '../../modules/player/playerLevel';
import { UpDateProfileModel } from '../../services/player/updateprofile';

export interface ProfileState {
        UpDateProfileModelError: HttpClientError | null;
        UpDateProfileModel: UpDateProfileModel | null;
        profile: Profile | null;
        
        profileUpdateResponse: UpDateProfileModel | null;
        profileUpdateFail: HttpClientError | null;
        tournamentList: TournamentsList | null;
        stats: Stats | null;
        playerLevel: PlayerLevel | null;
        playerLevelFail: HttpClientError | null;
        GameHistoryData: GameHistoryData | null;
        GameHistoryError: HttpClientError | null;
        remotegameshistory: RemoteGamesHistory | null;
        remotegameshistoryError: HttpClientError | null;
}
const initialState: ProfileState = {
        profile: null,
        tournamentList: null,
        stats: null,
        profileUpdateResponse: null,
        profileUpdateFail: null,
        playerLevel: null,
        playerLevelFail: null,
        GameHistoryData: null,
        GameHistoryError: null,
        remotegameshistory: null,
        remotegameshistoryError: null,
        UpDateProfileModelError: null,
        UpDateProfileModel: null
}

export function playerReducer(state: ProfileState = initialState, action: playerActions.PlayerActions) {
        switch (action.type) {
                case playerActions.RESET_STATE:
                        return {
                                ...state,
                                profile: null,
                                tournamentList: null,
                                stats: null,
                                profileUpdateResponse: null,
                                profileUpdateFail: null,
                                playerLevel: null,
                                playerLevelFail: null,
                                GameHistoryData: null,
                                GameHistoryError: null,
                                remotegameshistory: null,
                                remotegameshistoryError: null
                        }
                case playerActions.PLAYER_GET_PROFILE:
                        return {
                                ...state,
                                profile: null
                        }
                case playerActions.PLAYER_GET_PROFILE_SUCCESS:
                        return {
                                ...state,
                                profile: { ...state, ...action.payload }
                        }
                case playerActions.PLAYER_GET_PROFILE_FAIL:
                        return {
                                ...state,
                                profile: null
                        }
                case playerActions.PLAYER_GET_TOURNAMENTS_LIST:
                        return {
                                ...state,
                                tournamentList: null
                        }
                case playerActions.PLAYER_GET_TOURNAMENTS_LIST_SUCCESS:
                        return {
                                ...state,
                                tournamentList: { ...state.tournamentList, ...action.payload }
                        }
                case playerActions.PLAYER_GET_TOURNAMENTS_LIST_FAIL:
                        return {
                                ...state,
                                tournamentList: null
                        }
                case playerActions.PLAYER_GET_STATS:
                        return {
                                ...state,
                                stats: null
                        }
                case playerActions.PLAYER_GET_STATS_SUCCESS:
                        return {
                                ...state,
                                stats: { ...state.stats, ...action.payload }
                        }
                case playerActions.PLAYER_GET_STATS_FAIL:
                        return {
                                ...state,
                                stats: null
                        }
                case playerActions.PLAYER_GET_PLAYERLEVELS:
                        return {
                                ...state,
                                playerLevel: null,
                                playerLevelFail: null
                        }
                case playerActions.PLAYER_GET_PLAYERLEVELS_SUCCESS:
                        return {
                                ...state,
                                playerLevel: { ...state.playerLevel, ...action.payload },
                                playerLevelFail: null
                        }
                case playerActions.PLAYER_GET_PLAYERLEVELS_FAIL:
                        return {
                                ...state,
                                playerLevel: null,
                                playerLevelFail: { ...state.playerLevelFail, ...action.payload }
                        }
                case playerActions.PLAYER_UPDATE_PROFILE:
                        return {
                                ...state,
                                profileUpdateResponse: null,
                                profileUpdateFail: null
                        }
                case playerActions.PLAYER_UPDATE_PROFILE_SUCCESS:
                case playerActions.PLAYER_UPDATE_PASSWORD_SUCCESS:
                        return {
                                ...state,
                                profileUpdateResponse: { ...state.profileUpdateResponse, ...action.payload },
                                profileUpdateFail: null
                        }
                case playerActions.PLAYER_UPDATE_PROFILE_FAIL:
                case playerActions.PLAYER_UPDATE_PASSWORD_FAIL:
                        return {
                                ...state,
                                profileUpdateResponse: null,
                                profileUpdateFail: { ...state.profileUpdateFail, ...action.payload }
                        }
                case playerActions.PLAYER_GET_GAME_HISTORY:
                        return {
                                ...state,
                                GameHistoryData: null,
                                GameHistoryError: null
                        }
                case playerActions.PLAYER_GET_GAME_HISTORY_SUCCESS:
                        return {
                                ...state,
                                GameHistoryData: { ...state.tournamentList, ...action.payload },
                                GameHistoryError: null
                        }
                case playerActions.PLAYER_GET_GAME_HISTORY_FAIL:
                        return {
                                ...state,
                                GameHistoryData: null,
                                GameHistoryError: { ...state.GameHistoryError, ...action.payload }
                        }
                case playerActions.PLAYER_GET_REMOTE_GAME_HISTORY:
                        return {
                                ...state,
                                remotegameshistory: null,
                                remotegameshistoryError: null
                        }
                case playerActions.PLAYER_GET_REMOTE_GAME_HISTORY_SUCCESS:
                        return {
                                ...state,
                                remotegameshistory: { ...state.remotegameshistory, ...action.payload },
                                remotegameshistoryError: null
                        }
                case playerActions.PLAYER_GET_REMOTE_GAME_HISTORY_FAIL:
                        return {
                                ...state,
                                remotegameshistory: null,
                                remotegameshistoryError: { ...state.remotegameshistoryError, ...action.payload },
                        }
                default:
                        return state;
        }
}