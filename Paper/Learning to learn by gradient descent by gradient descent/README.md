# [Learning to learn by gradient descent by gradient descent](https://arxiv.org/abs/1606.04474)

*by deepmind on NIPS 2016*
- SEOHASONG - Korea Univ.
- 2018.03.25
- Deep Paper Study 신촌

## Abstract

사람들은 목적달성을 위해 경영, 공학, 정치 등 다양한 분야에서 결과에 영향을 주는 변수를 찾고자 노력합니다.

사람이 직접 변수를 찾아낼 수도 있지만, 기계학습이 발전하면서
컴퓨터가 자동으로 변수를 찾는 방식도 주목받고 있습니다.

기계학습에서 알고리즘은 최적화 알고리즘입니다.
최적화알고리즘은 예측이 틀린 정도가 최소가 되도록 설계됩니다.

컴퓨터는 데이터에 알고리즘을 적용해 자동으로 적절한 변수를 찾는 역할을 하며,
여기 사용되는 알고리즘은 사람이 직접 만들어 줘야 합니다.

이 논문에서는 사람이 직접 만들던 최적화 알고리즘을 학습하는 문제를 논의합니다.

- 기존에는 사람이 만든 최적화 알고리즘을 통해 변수를 학습했습니다.
- 앞으로는 최적화 알고리즘을 변수로 두고 그것이 무엇일지 자동으로 학습하고자 합니다.

이 논문의 목적은 *특정 분류의 문제에 대해 잘 동작하는 알고리즘*을 만드는 일련의 과정을 개발하는 것입니다.

*알고리즘 만들기*를 우리가 풀어야 하는 문제로 생각하는 것을 **Meta learning**이라고 부릅니다.

Meta learning 관련 논문으로는 AutoML등이 있으며,

Meta learning은 Few-shot learning(One-shot, Zero-shot 등등)과도 관련이 있습니다.

[더보기](./Learning%20to%20learn%20by%20gradient%20descent%20by%20gradient%20descent/README.ipynb)