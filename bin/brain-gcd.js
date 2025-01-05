#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameDescription, generateRound } from '../src/games/gcd.js';

runGame(gameDescription, generateRound);
