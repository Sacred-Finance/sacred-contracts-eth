// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import '../MerkleTreeWithHistory.sol';

contract MerkleTreeWithHistoryMock is MerkleTreeWithHistory {

  constructor (uint32 _treeLevels) MerkleTreeWithHistory(_treeLevels) public {}

  function insert(bytes32 _leaf) public {
      _insert(_leaf);
  }
}
