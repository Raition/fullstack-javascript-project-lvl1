#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameDescription, generateRound } from '../src/games/progression.js';

runGame(gameDescription, generateRound);
