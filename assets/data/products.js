const products = [
  {
    id: "cocopeat",
    title: {
      id: "Cocopeat",
      en: "Cocopeat",
      jp: "ココピート",
    },
    image: "cocopeat.webp",
    shortDescription: {
      id: "Cocopeat adalah media tanam organik dari serbuk sabut kelapa, ringan, gembur, dan ramah lingkungan.",
      en: "Cocopeat is an organic growing medium made from coconut husk powder, lightweight, porous, and eco-friendly.",
      jp: "ココピートはココナッツの殻粉から作られた有機培地で、軽量で通気性があり、環境に優しいです。",
    },
    description: {
      id: `<p><b>Cocopeat</b> adalah media tanam organik yang berasal dari serbuk halus (debu sabut) hasil sampingan pengolahan sabut kelapa. Sering juga disebut sebagai <i>coco coir</i> atau serbuk sabut kelapa.</p>
<p>Secara fisik, cocopeat memiliki tekstur yang ringan, gembur, dan mirip tanah, dengan warna cokelat muda. Cocopeat biasanya dijual dalam bentuk serbuk curah atau blok padat terkompresi yang akan mengembang saat direndam air.</p>
<h3>Penjelasan Cocopeat sebagai Media Tanam</h3>
<p>Cocopeat populer sebagai media tanam, baik digunakan sendiri maupun dicampur dengan bahan lain (tanah, sekam bakar, kompos), terutama untuk hidroponik atau pembibitan.</p>
<h4>Karakteristik dan Manfaat Utama:</h4>
<ul>
<li><b>Daya Serap Air Tinggi:</b>
<ul>
<li>Mampu menyerap dan menahan air hingga 8–10 kali bobot keringnya.</li>
<li>Menjaga kelembaban media tanam lebih lama, mengurangi frekuensi penyiraman.</li>
</ul>
</li>
<li><b>Aerasi (Pertukaran Udara) Baik:</b>
<ul>
<li>Pori-pori memungkinkan sirkulasi udara di sekitar akar.</li>
<li>Keseimbangan ideal antara retensi air dan aerasi.</li>
</ul>
</li>
<li><b>Ramah Lingkungan (Organik):</b>
<ul>
<li>Terbuat dari limbah sabut kelapa, dapat diperbarui dan terurai alami.</li>
<li>Dapat didaur ulang setelah pemakaian.</li>
</ul>
</li>
<li><b>pH Netral:</b> Cocok untuk berbagai jenis tanaman.</li>
<li><b>Tahan Hama dan Penyakit:</b> Mengandung enzim jamur alami (Trichoderma) yang membantu mengurangi penyakit tanah.</li>
</ul>
<h4>Catatan Penting:</h4>
<ul>
<li><b>Pencucian (Buffering):</b> Cocopeat baru biasanya mengandung garam (Na & K) tinggi, perlu dicuci sebelum dipakai.</li>
<li><b>Kandungan Hara:</b> Rendah, sehingga perlu pupuk tambahan secara rutin.</li>
</ul>`,
      en: `<p><b>Cocopeat</b> is an organic growing medium made from fine coconut husk powder, a by-product of coconut processing. It is also known as <i>coco coir</i> or coconut fiber dust.</p>
<p>Physically, cocopeat has a lightweight, porous texture, resembling soil, with a light brown color. It is usually sold in bulk powder or compressed blocks that expand when soaked in water.</p>
<h3>Cocopeat as a Growing Medium</h3>
<p>Cocopeat is widely used as a growing medium, either on its own or mixed with other materials (soil, burnt husk, compost), especially in hydroponics and seedling cultivation.</p>
<h4>Main Characteristics and Benefits:</h4>
<ul>
<li><b>High Water Retention:</b>
<ul>
<li>Can absorb and retain water up to 8–10 times its dry weight.</li>
<li>Keeps moisture longer, reducing watering frequency.</li>
</ul>
</li>
<li><b>Good Aeration:</b>
<ul>
<li>Porous structure allows proper air circulation around roots.</li>
<li>Balances water retention and aeration.</li>
</ul>
</li>
<li><b>Eco-Friendly (Organic):</b>
<ul>
<li>Made from coconut waste, renewable and biodegradable.</li>
<li>Can be recycled after use.</li>
</ul>
</li>
<li><b>Neutral pH:</b> Suitable for various plants.</li>
<li><b>Pest and Disease Resistant:</b> Contains natural fungi (Trichoderma) that help reduce soil-borne diseases.</li>
</ul>
<h4>Important Notes:</h4>
<ul>
<li><b>Washing (Buffering):</b> Fresh cocopeat may contain high salts (Na & K), so it needs to be washed before use.</li>
<li><b>Nutrient Content:</b> Relatively low, so regular fertilization is required.</li>
</ul>`,
      jp: `<p><b>ココピート</b>はココナッツの殻粉から作られた有機培地です。ココナッツ加工の副産物としても知られています。</p>
<p>物理的には軽量で通気性があり、土のような質感で淡い茶色をしています。通常、粉末または圧縮ブロックとして販売され、水に浸すと膨張します。</p>
<h3>栽培用媒体としてのココピート</h3>
<p>ココピートは、単独でも、他の材料（土、焼き殻、堆肥）と混ぜても使用され、特に水耕栽培や苗の育成に広く用いられています。</p>
<h4>主な特徴と利点:</h4>
<ul>
<li><b>高い水分保持:</b>
<ul>
<li>乾燥重量の8〜10倍の水を吸収・保持できます。</li>
<li>水分を長く保ち、水やりの頻度を減らします。</li>
</ul>
</li>
<li><b>良好な通気性:</b>
<ul>
<li>根の周りの適切な空気循環を可能にします。</li>
<li>水分保持と通気性のバランスが取れています。</li>
</ul>
</li>
<li><b>環境に優しい（有機）:</b>
<ul>
<li>ココナッツ廃棄物から作られ、再生可能で生分解性があります。</li>
<li>使用後はリサイクル可能です。</li>
</ul>
</li>
<li><b>中性pH:</b> さまざまな植物に適しています。</li>
<li><b>害虫・病気耐性:</b> 自然の真菌（Trichoderma）を含み、土壌由来の病気を減らすのに役立ちます。</li>
</ul>
<h4>重要な注意事項:</h4>
<ul>
<li><b>洗浄（バッファリング）:</b> 新しいココピートは塩分（Na＆K）が高い場合があり、使用前に洗浄が必要です。</li>
<li><b>栄養分:</b> 比較的低いため、定期的な施肥が必要です。</li>
</ul>`,
    },
  },
  {
    id: "arabica_orange_bourbon",
    title: {
      id: "Arabica Orange Bourbon",
      en: "Arabica Orange Bourbon",
      jp: "アラビカ・オレンジ・ブルボン",
    },
    image: "arabica_orange_bourbon.webp",
    shortDescription: {
      id: "Arabica Orange Bourbon adalah varietas kopi Arabika premium dengan cita rasa manis, lembut, dan aroma jeruk yang khas.",
      en: "Arabica Orange Bourbon is a premium Arabica coffee variety with a sweet, smooth taste and a distinctive orange aroma.",
      jp: "アラビカ・オレンジ・ブルボンは、甘く滑らかな味わいと特徴的なオレンジの香りを持つプレミアムアラビカコーヒー品種です。",
    },
    description: {
      id: `<p><b>Arabica Orange Bourbon</b> adalah varietas kopi Arabika premium yang berasal dari biji kopi pilihan. Dikenal karena rasa manis, lembut, dan aroma jeruk yang khas, membuatnya populer di kalangan pecinta kopi spesialti.</p>
<h3>Ciri-ciri dan Keunggulan:</h3>
<ul>
<li><b>Rasa dan Aroma:</b> Kombinasi rasa manis, lembut, dan aroma jeruk alami yang menyegarkan.</li>
<li><b>Kualitas Biji:</b> Biji kopi besar, padat, dan seragam, ideal untuk roasting specialty.</li>
<li><b>Cara Budidaya:</b> Tumbuh baik di dataran tinggi dengan iklim sejuk dan tanah subur.</li>
<li><b>Pengolahan:</b> Diproses secara semi-washed atau fully-washed untuk menjaga kualitas rasa.</li>
<li><b>Kesehatan Tanaman:</b> Varietas ini relatif tahan terhadap penyakit daun kopi dan memiliki produktivitas tinggi.</li>
</ul>
<h4>Catatan Penikmat Kopi:</h4>
<ul>
<li>Sebaiknya disimpan di tempat kering dan kedap udara.</li>
<li>Roasting medium roast akan menonjolkan aroma jeruk, sementara dark roast menekankan rasa manis dan body kopi.</li>
</ul>`,
      en: `<p><b>Arabica Orange Bourbon</b> is a premium Arabica coffee variety made from carefully selected coffee beans. It is renowned for its sweet, smooth taste and distinctive orange aroma, making it popular among specialty coffee lovers.</p>
<h3>Characteristics and Advantages:</h3>
<ul>
<li><b>Flavor & Aroma:</b> A sweet, smooth taste combined with a refreshing natural orange aroma.</li>
<li><b>Bean Quality:</b> Large, dense, uniform beans ideal for specialty roasting.</li>
<li><b>Cultivation:</b> Grows well in highlands with cool climate and fertile soil.</li>
<li><b>Processing:</b> Semi-washed or fully-washed to preserve flavor quality.</li>
<li><b>Plant Health:</b> Relatively resistant to coffee leaf diseases and highly productive.</li>
</ul>
<h4>Brewing Notes:</h4>
<ul>
<li>Store in a dry, airtight container.</li>
<li>Medium roast enhances the orange aroma, while dark roast emphasizes sweetness and coffee body.</li>
</ul>`,
      jp: `<p><b>アラビカ・オレンジ・ブルボン</b>は、厳選されたコーヒー豆から作られたプレミアムアラビカコーヒー品種です。甘く滑らかな味わいと特徴的なオレンジの香りで、スペシャルティコーヒー愛好者に人気があります。</p>
<h3>特徴と利点:</h3>
<ul>
<li><b>味と香り:</b> 甘く滑らかな味わいと、爽やかな自然のオレンジの香りの組み合わせ。</li>
<li><b>豆の品質:</b> 大きく、密度が高く、均一な豆で、スペシャルティローストに最適。</li>
<li><b>栽培:</b> 高地で涼しい気候と肥沃な土壌でよく育ちます。</li>
<li><b>加工:</b> フルウォッシュまたはセミウォッシュで処理され、風味の質を保持。</li>
<li><b>植物の健康:</b> コーヒーの葉の病気に比較的強く、生産性が高い。</li>
</ul>
<h4>淹れ方の注意:</h4>
<ul>
<li>乾燥した密閉容器で保存してください。</li>
<li>ミディアムローストでオレンジの香りを引き立て、ダークローストで甘みとコーヒーのコクを強調します。</li>
</ul>`,
    },
  },
];
