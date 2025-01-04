#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameDescription, generateRound } from '../src/games/calc.js';

runGame(gameDescription, generateRound);
