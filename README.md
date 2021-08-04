## motivation
- 手軽に大量の画像を webp 化したい
- さくっと作ったので細かい機能はなにもない

## how
1. `$ yarn`
2. `/origin` に webp 化したい画像を格納
    - 拡張子が `jpg`, `gif`, `png` のみに対応
        - `jpeg` 等は非対応
3. `$ yarn convert`
4. `./dist` に webp が出力される
