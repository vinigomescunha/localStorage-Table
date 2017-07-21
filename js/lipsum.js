Lipsum = {
  lipsum: 'Lorem ipsum dolor-sit amet porta varius neque leonon portaeget \
urnaRisus tellus gravida-atvivamus laoreet nequevel taciti nulla-inrisus vitae \
 namadad iaculis-accumsan semperlacus viverra hacaliquam-acfermentum ridiculusaccumsan \
 tristique ultrices Utvitae mattis vestibulum nonummy wisieu phasellus-ac lorem-erat fusce \
 morbi justo Eleifend lacus justo ullamcorper dui dui eros hac-l-ipsum vivamus massa a dictum \
 voluptate consectetuer venenatis enim Purus phasellus eget vel-in neque bibendum leo-vitae-nunc \
 ligula tempor quisque felis-eu eratsociosqu-elit euismod dapibus et-Vitae Adipiscing dignissim \
 mattis et cursus pulvinar condimentum Malesuada duis nunc-in ultrices lacus-odio felis porttitor\
 dis donec-risus fermentum leo-sodales orci-neque sed-risus sagittis urna-Eget pharetra massaetnon \
 tincidunt sed Erat-in tellus nullam-vestibulum consectetur-get sedeu-sit ipsum elitamet arcu-nulla \
 orcihendrerit risus-vitae tincidunt placerat metusdolor augueNec quam lorem justo ipsum necVel \
 nam ultricies labore ornare nulla id mi venenatis-integer commodo aliquam quisque diam nullam \
 quamnulla gravida aliquam Posuere praesent nec ligula Quam tristique lectus-sit neque lobortis nisl \
 tempus parturient magnaDS Sed-sit mauris hendrerit etnulla neque nonummy-ac vehicula Vivamus \
 nammetus-in varius diam amet dapibus mauris urna-in-in quisque quas-ac eget orci dignissim euismod \
 semper Neque quismitempus suspendisse nibh-mauris-interdum suscipit odio lectus Amet iaculis \
 dis lectus id dui ut nulla proin-sit Tristique nulla volutpat a-at est eleifend fuga-natoque \
 porttitor vitaeonummy-in lectus Rhoncuspede-quam imperdiet commodo felis sodales morbi nonmattis \
 consectetuerNec nonest facilis nequelacus nisl adsem-a tristique nec-suscipit et-fugit dapibus \
 venenatis felis nec natoque nonrhoncus ipsum Mattis egetpulvinar justo id-integer congue justo \
 dapibus amet quis laoreet rhoncus nullam mi donec consectetuer wisi purus elitErat metus odio \
 Lacinia-sit-sit vehicula vitae utfusce eiusmod justo vestibulum ut-nam laoreet lectus eget-justo \
 quisurna vestibulum-ac volutpat lacinia voluptatem duimagna ipsum Orci curabitur pede recusandae \
 sed-nec viverra magna sociis-integer etpellentesque viverra est-gravida feugiat suspendisse-sit\
 endrerit wisi natoque quis-acnulla nulla phasellus-accumsan augue vestibulum lacus mauris \
 Aidante magna etsed urna ut nunc sed tortor ornare culpa Dui-leo noniaculis urna elementum \
 euismod pellentesque odio aliquam nonummy-at pellentesque blandit quam suscipit suspendisse \
 lacus vestibulum nunc porttitor Vestibulum velit duis-sit-accumsan lacus augue-inceptosfeugiat-at \
 ut-hac luctus non-morbi duis penatibus montes Proin fringilla ultrices ipsum-accumsan sollicitudinV'
};
Lipsum.random = function () {
  var items = Lipsum.lipsum.replace(/  /g, " ").split(' ');
  var i = Math.floor(Math.random() * items.length);
  return items[i];
}
