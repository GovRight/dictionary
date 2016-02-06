'use strict';
/*jshint ignore:start*/
(function() {
  angular
    .module('govright.dictionary', [])
    .constant('GovrightDictionary', {"ar":{"locale.code":"ar","law.title":"قانون","law.text":"القانون هو علم اجتماعي، موضوعه الإنسان وسلوكه مع نظائره، أعماله وردود أفعاله، وهذا موضوع ضخم، متغير المضمون، غير معروف على وجه التحديد ويصعب عرضه بدقـى ينظمها كل فرد وفق رغبته ومشيئته، والا صدقت وتحققت مقولة الفيلسوف بسوت Bossuet \" حيث يملك الكل فعل ما يشاءون لا يملك أحد فعل ما يشاء، وحيث لاسيد، فالكل سيد، وحيث الكل سيد فالكل عبيد \". لذاكان لابد للمجتمع من نظام يحكم العلاقات بين الناس ويفرض الأمان في المجتمع. ","legislation-penal.title":"التشريع الجنائي","legislation-penal.text":"هو مجموعة القواعد القانونية التي تضبط فيها الدولة الافعال المجرمة وعقوباتها،وهو مايحمله مسؤولية التصدي لكل فعل مشين يؤدي إلى خلق اضطراب في  المجتمع. ","crime.title":"الجريمة","crime.text":"هي عمل أو امتناع عن عمل مخالف للقانون الجنائي ومعاقب عليه بمقتضاه","peines-initiales.title":"العقوبات الأصلية","peines-initiales.text":"العقوبات الأصلية إما جنائية أو جنحية أو ضبطية. فتكون أصلية عندما يسوغ الحكم بها وحدها دون أن تضاف إلى عقوبة أخرى.","peines-additionnelle.title":"العقوبات الإضافية","peines-additionnelle.text":"تكون إضافية عندما لا يسوغ الحكم بها وحدها، أو عندما تكون ناتجة عن الحكم بعقوبة أصلية.","cour-dappel.title":"محكمة الإستئناف","cour-dappel.text":"محكمة الدرجة الثانية التي تنظر الطعون في الأحكام الصادرة من محاكم الدرجة الأولى القابلة للطعن أمامها وفي القضايا الأخرى التي نصّ القانون على اختصاصها بها.","Tribunal-Ier-Instance.title":"محكمة إبتدائية","Tribunal-Ier-Instance.text":"محكمة ذات ولاية عامة للنظر بدرجة أولى في جميع القضايا التي أسندها إليها القانون أو لم يعيّن مرجعاً آخر للنظر فيها.","Force-Majeur.title":"القوة القاهرة","Force-Majeur.text":"كل شيء لا يستطيع الإنسان دفعه.","Peine-Mort.title":"الإعـــدام","Peine-Mort.text":"إزهاق روح الجاني وفق الطرق المقرّرة قانوناً.","residence-forcee.title":"الإقامة الجبرية","residence-forcee.text":"المكان الذي يحدّده القاضي لإقامة المحكوم عليه.","Prison.title":"السجــــن,الحبــــس","Prison.text":"حجز حرية المحكوم عليه بوضعه في إحدى المؤسسات المخصّصة قانوناً تنفيذاً لحكم صادر في جنحة.","tentative-crime.title":"محاولة الجريمة (الشروع)","tentative-crime.text":"البدء في تنفيذ جناية أو جنحة أوقف تنفيذها أو لم يحصل أثرها بسبب خارج عن إرادة الفاعل.","amende.title":"الغــرامــة","amende.text":"إلزام المحكوم عليه بأداء مبلغ من النقود لصالح الخزينة العامة.","arrêt-criminel.title":"التوقيـــف","arrêt-criminel.text":"حجز الشخص قبل صدور الحكم عليه.","interdiction-residence.title":"منع الإقامــة","interdiction-residence.text":"حظر تواجد المحكوم، بعد الإفراج عنه، في الأماكن التي يعيّنها الحكم.","obligation-resider.title":"الإجبار على الإقامة","obligation-resider.text":"إلزام المحكمة للمحكوم عليه بعقوبة سالبة للحرية، بالإقامة في المكان أو الدائرة التي تعينها، بعد تنفيذ العقوبة، في الجرائم التي تمسّ أمن الدولة.","dissoudre-personne-morale.title":"حلّ الشخص المعنوي","dissoudre-personne-morale.text":"منعه عن مواصلة نشاطه، ويترتّب عليه تصفية أمواله.","recidive.title":"العـــــود","recidive.text":"ارتكاب جريمة بعد أن يصدر حكم اكتسب الدرجة القطعية من أجل جريمة سابقة.","meurtre-premedite.title":"القتل العمد","meurtre-premedite.text":"إزهاق نفس قصداً وعدواناً.","meurtre-sans-premeditation.title":"القتل الخطــأ","meurtre-sans-premeditation.text":"التسبّب في موت شخص عن إهمال أو قلّة احتراز أو عدم مراعاة القوانين والأنظمة.","complot.title":"المؤامـــرة","complot.text":"كل تصميم يتمّ بين شخصين أو أكثر على ارتكاب فعل إجرامي.","trahison.title":"الخيانــــة","trahison.text":"ارتكاب المواطن أحد الجرائم الماسّة بأمن الدولة الخارجي.","espionnage.title":"التجسّــس","espionnage.text":"ارتكاب الأجنبي أحد الجرائم الماسّة بأمن الدولة الخارجي.","detournement-fonds.title":"الإختــلاس","detournement-fonds.text":"كل إخفاء أو إتلاف أو تبديد أو احتجاز لأموال عامة أو خاصة أو سندات تقوم مقامها أو منقولات أو عقود من موظف عهدت إليه بمقتضى وظيفته أو بسببها.","corruption.title":"الرشـــوة","corruption.text":"طلب الموظف لنفسه أو لغيره أو قبوله أو أخذه وعداً أو عطية لأداء عمل من أعمال وظيفته أو الإمتناع عنه.","abus-pouvoir.title":"استغلال النفوذ","abus-pouvoir.text":"طلب الموظف أو قبوله عرضاً بمنفعة من أجل الحصول على قرار لصالحه أو لصالح غيره، مستغلاً في ذلك نفوذه.","abus.title":"الشطط في استعمال السلطة","abus.text":"تكليف الموظف أو أمره أو حمله للغير باستعمال القوة العامة أو تدخلها ضد تنفيذ القانون أو أي أمر صادر من سلطة شرعية.","mendicite.title":"التســــوّل","mendicite.text":"اعتياد ممارسة الإستجداء ممن كان لديه وسيلة مشروعة للتعيش أو في إمكانه الحصول عليها.","falsification.title":"التزويــــر","falsification.text":"تغيير الحقيقة مادّياً أو معنوياً بقصد الغشّ في سند أو وثيقة من شأنه إحداث ضرر.","contrefaçon-argent.title":"تزييف النقـود","contrefaçon-argent.text":"تقليد النقود بصنع نقود تشبه العملة الحقيقية.","changement-argent.title":"تغيير النقـود","changement-argent.text":"إستبدال النقود المعدنية المتداولة قانوناً أو إنقاص وزنها أو نسبة الفضة أو الذهب فيها.","faux-temoignage.title":"شهادة الزور","faux-temoignage.text":"تغيير الحقيقة عمداً تغييراً من شأنه تضليل العدالة لصالح أحد الخصوم أو ضده.","premeditation.title":"سبق الإصرار","premeditation.text":"العزم المصمّم عليه قبل وقوع الجريمة بالإعتداء على شخص معيّن أو على أي شخص قد يوجد أو يصادف وجوده في مكان الجريمة.","surveillance.title":"الترصّـــد","surveillance.text":"التربّص بشخص قصد قتله أو ارتكاب العنف ضده.","insultes.title":"السّــــب","insultes.text":"كل تعبير شائن أو عبارة تحقير أو قدح لا يتضمّن أية واقعة معيّنة.","violation-pudeur-publique.title":"الإخلال العلني بالحياء","violation-pudeur-publique.text":"ارتكاب أفعال أو إشارات مخلّة بالحياء العام علناً بحضور شخص أو أكثر أو بحضور قاصر أو في مكان عامّ.","viol.title":"هتك العــرض","viol.text":"كل اعتداء جنسي مهما كان نوعه جرى ارتكابه على شخص الغير ذكراً أم أنثى بدون رضاه.","homosexualite.title":"الشذوذ الجنسي","homosexualite.text":"كل فعل جنسي تمّ بالتراضي بين شخصين من نفس الجنس.","crime-corruption.title":"جريمة الفسـاد","crime-corruption.text":"كل علاقة جنسية دون جريمة الزنا بين رجل وامرأة لا تربط بينهما علاقة زوجية.","prostitution.title":"البغـــــاء","prostitution.text":"احتراف المرأة ممارسة العلاقة الجنسية مع الرجال مقابل أجر أو مكافأة.","arnaque.title":"النصــــب","arnaque.text":"استعمال وسائل إحتيالية لخدع المجنى عليه ودفعه إلى أعمال أو تصرفات ضارّة به أو بالغير مقابل الحصول على منفعة.","malhonotete.title":"خيانة الأمانـة","malhonotete.text":"تصرّف الشخص لفائدته أو لفائدة غيره في مال منقول مملوك للغير بسوء قصد أو تصرّف فيه خلافاً للغرض الذي سلّم له من أجله.","locale.name":"Arabic"},"en":{"locale.code":"en","law.title":"Law, Legislation","law.text":"Law is a system of rules that are enforced through social institutions to govern behaviour. Laws can be made by a collective legislature or by a single legislator, resulting in statutes, by the executive through decrees and regulations, or by judges through binding precedent, normally in common law jurisdictions.","legislation-penal.title":"","legislation-penal.text":"","crime.title":"","crime.text":"","peines-initiales.title":"","peines-initiales.text":"","peines-additionnelle.title":"","peines-additionnelle.text":"","cour-dappel.title":"","cour-dappel.text":"","Tribunal-Ier-Instance.title":"","Tribunal-Ier-Instance.text":"","Force-Majeur.title":"","Force-Majeur.text":"","Peine-Mort.title":"","Peine-Mort.text":"","residence-forcee.title":"","residence-forcee.text":"","Prison.title":"","Prison.text":"","tentative-crime.title":"","tentative-crime.text":"","amende.title":"","amende.text":"","arrêt-criminel.title":"","arrêt-criminel.text":"","interdiction-residence.title":"","interdiction-residence.text":"","obligation-resider.title":"","obligation-resider.text":"","dissoudre-personne-morale.title":"","dissoudre-personne-morale.text":"","recidive.title":"","recidive.text":"","meurtre-premedite.title":"","meurtre-premedite.text":"","meurtre-sans-premeditation.title":"","meurtre-sans-premeditation.text":"","complot.title":"","complot.text":"","trahison.title":"","trahison.text":"","espionnage.title":"","espionnage.text":"","detournement-fonds.title":"","detournement-fonds.text":"","corruption.title":"","corruption.text":"","abus-pouvoir.title":"","abus-pouvoir.text":"","abus.title":"","abus.text":"","mendicite.title":"","mendicite.text":"","falsification.title":"","falsification.text":"","contrefaçon-argent.title":"","contrefaçon-argent.text":"","changement-argent.title":"","changement-argent.text":"","faux-temoignage.title":"","faux-temoignage.text":"","premeditation.title":"","premeditation.text":"","surveillance.title":"","surveillance.text":"","insultes.title":"","insultes.text":"","violation-pudeur-publique.title":"","violation-pudeur-publique.text":"","viol.title":"","viol.text":"","homosexualite.title":"","homosexualite.text":"","crime-corruption.title":"","crime-corruption.text":"","prostitution.title":"","prostitution.text":"","arnaque.title":"","arnaque.text":"","malhonotete.title":"","malhonotete.text":"","locale.name":"English"}});
})();
/*jshint ignore:end*/
