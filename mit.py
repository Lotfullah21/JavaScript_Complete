# print(not (5 > 3) and not (6 < 10))
# print((10>5) or (7<3) and not (2+2=5))

import numpy as np
from scipy import stats
x = [159, 161, 162, 162, 163, 164, 164,
     165, 165, 166, 166, 166, 167, 167, 168, 168, 168, 168, 169, 169, 169,
     170, 170, 170, 170, 170, 171, 171, 171, 171, 171, 171, 172, 172, 172, 172, 172, 172, 172,
     173, 173, 173, 173, 173, 173, 173, 173, 173, 174, 174, 174, 174, 174,
     175, 175, 177, 178, 178, 178, 178, 179, 179, 181]

print(len(x))
print("mean", np.average(x))
print(np.mean(x))
print("median", np.median(x))
# print("mode", stats.mode(x))
print("variance", np.var(x))
print("stdv", np.std(x))
