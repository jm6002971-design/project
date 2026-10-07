// src/app/core/appstates/playerstates/playerActions.ts
var PLAYER_GET_PROFILE = "[profile] PLAYER_GET_PROFILE";
var PLAYER_GET_PROFILE_SUCCESS = "[profile] PLAYER_GET_PROFILE_SUCCESS";
var PLAYER_GET_PROFILE_FAIL = "[profile] PLAYER_GET_PROFILE_FAIL";
var PLAYER_UPDATE_PROFILE = "[profile] PLAYER_UPDATE_PROFILE";
var PLAYER_UPDATE_PROFILE_SUCCESS = "[profile] PLAYER_UPDATE_PROFILE_SUCCESS";
var PLAYER_UPDATE_PROFILE_FAIL = "[profile] PLAYER_UPDATE_PROFILE_FAIL";
var PLAYER_UPDATE_PASSWORD = "[profile] PLAYER_UPDATE_PASSWORD";
var PLAYER_UPDATE_PASSWORD_SUCCESS = "[profile] PLAYER_UPDATE_PASSWORD_SUCCESS";
var PLAYER_UPDATE_PASSWORD_FAIL = "[profile] PLAYER_UPDATE_PASSWORD_FAIL";
var PLAYER_GET_GAME_HISTORY = "[profile] PLAYER_GET_GAME_HISTORY";
var PLAYER_GET_GAME_HISTORY_SUCCESS = "[profile] PLAYER_GET_GAME_HISTORY_SUCCESS";
var PLAYER_GET_GAME_HISTORY_FAIL = "[profile] PLAYER_GET_GAME_HISTORY_FAIL";
var PLAYER_GET_TOURNAMENTS_LIST = "[profile] PLAYER_GET_TOURNAMENTS_LIST";
var PLAYER_GET_TOURNAMENTS_LIST_SUCCESS = "[profile] PLAYER_GET_TOURNAMENTS_LIST_SUCCESS";
var PLAYER_GET_TOURNAMENTS_LIST_FAIL = "[profile] PLAYER_GET_TOURNAMENTS_LIST_FAIL";
var PLAYER_GET_STATS = "[profile] PLAYER_GET_STATS";
var PLAYER_GET_STATS_SUCCESS = "[profile] PLAYER_GET_STATS_SUCCESS";
var PLAYER_GET_STATS_FAIL = "[profile] PLAYER_GET_STATS_FAIL";
var PLAYER_GET_PLAYERLEVELS = "[profile] PLAYER_GET_PLAYERLEVELS";
var PLAYER_GET_PLAYERLEVELS_SUCCESS = "[profile] PLAYER_GET_PLAYERLEVELS_SUCCESS";
var PLAYER_GET_PLAYERLEVELS_FAIL = "[profile] PLAYER_GET_PLAYERLEVELS_FAIL";
var PLAYER_GET_REMOTE_GAME_HISTORY = "[profile] PLAYER_GET_REMOTE_GAME_HISTORY";
var PLAYER_GET_REMOTE_GAME_HISTORY_SUCCESS = "[profile] PLAYER_GET_REMOTE_GAME_HISTORY_SUCCESS";
var PLAYER_GET_REMOTE_GAME_HISTORY_FAIL = "[profile] PLAYER_GET_REMOTE_GAME_HISTORY_FAIL";
var RESET_STATE = "[profile] RESET_STATE";
var ResetState = class {
  constructor() {
    this.type = RESET_STATE;
  }
};
var PlayerGetProfile = class {
  constructor() {
    this.type = PLAYER_GET_PROFILE;
  }
};
var PlayerGetProfileSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_GET_PROFILE_SUCCESS;
  }
};
var PlayerGetProfileFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_GET_PROFILE_FAIL;
  }
};
var PlayerUpdateProfileSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_UPDATE_PROFILE_SUCCESS;
  }
};
var PlayerUpdateProfileFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_UPDATE_PROFILE_FAIL;
  }
};
var PlayerUpdatePasswordSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_UPDATE_PASSWORD_SUCCESS;
  }
};
var PlayerUpdatePasswordFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_UPDATE_PASSWORD_FAIL;
  }
};
var PlayerGetStatsSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_GET_STATS_SUCCESS;
  }
};
var PlayerGetStatsFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_GET_STATS_FAIL;
  }
};
var PlayerGetPlayerLevelsSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_GET_PLAYERLEVELS_SUCCESS;
  }
};
var PlayerGetPlayerLevelsFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_GET_PLAYERLEVELS_FAIL;
  }
};
var PlayerGetRemoteGameHistorySuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_GET_REMOTE_GAME_HISTORY_SUCCESS;
  }
};
var PlayerGetRemoteGameHistoryFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_GET_REMOTE_GAME_HISTORY_FAIL;
  }
};

export {
  PLAYER_GET_PROFILE,
  PLAYER_GET_PROFILE_SUCCESS,
  PLAYER_GET_PROFILE_FAIL,
  PLAYER_UPDATE_PROFILE,
  PLAYER_UPDATE_PROFILE_SUCCESS,
  PLAYER_UPDATE_PROFILE_FAIL,
  PLAYER_UPDATE_PASSWORD,
  PLAYER_UPDATE_PASSWORD_SUCCESS,
  PLAYER_UPDATE_PASSWORD_FAIL,
  PLAYER_GET_GAME_HISTORY,
  PLAYER_GET_GAME_HISTORY_SUCCESS,
  PLAYER_GET_GAME_HISTORY_FAIL,
  PLAYER_GET_TOURNAMENTS_LIST,
  PLAYER_GET_TOURNAMENTS_LIST_SUCCESS,
  PLAYER_GET_TOURNAMENTS_LIST_FAIL,
  PLAYER_GET_STATS,
  PLAYER_GET_STATS_SUCCESS,
  PLAYER_GET_STATS_FAIL,
  PLAYER_GET_PLAYERLEVELS,
  PLAYER_GET_PLAYERLEVELS_SUCCESS,
  PLAYER_GET_PLAYERLEVELS_FAIL,
  PLAYER_GET_REMOTE_GAME_HISTORY,
  PLAYER_GET_REMOTE_GAME_HISTORY_SUCCESS,
  PLAYER_GET_REMOTE_GAME_HISTORY_FAIL,
  RESET_STATE,
  ResetState,
  PlayerGetProfile,
  PlayerGetProfileSuccess,
  PlayerGetProfileFail,
  PlayerUpdateProfileSuccess,
  PlayerUpdateProfileFail,
  PlayerUpdatePasswordSuccess,
  PlayerUpdatePasswordFail,
  PlayerGetStatsSuccess,
  PlayerGetStatsFail,
  PlayerGetPlayerLevelsSuccess,
  PlayerGetPlayerLevelsFail,
  PlayerGetRemoteGameHistorySuccess,
  PlayerGetRemoteGameHistoryFail
};
//# sourceMappingURL=chunk-PYDFV3LO.js.map
