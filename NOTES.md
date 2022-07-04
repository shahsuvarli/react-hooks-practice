useEffect()

1. useEffect(func, null) - hem MOUNT, hem de UPDATE olunanda ishe dushecek
2. useeffect(func, []) - yalniz MOUNT olunanda ishe dushecek
3. useEffect(func, [props or state]) - hem MOUNT, hem de arraydeki deyishenler UPDATE olunanda ishe dushecek
4. useEffect(return ()=>func()) - UNMOUNT kimi ishleyecek
5. useEffect hemcinin eger shouldComponent kimi ishleyerek eger deyer deyishmirse bu zaman update olunmur

useLayoutEffect()

1. componentWillMount kimi ishleyecek
2. return run olandan sonra ishe dushur
3. useEffect-den evvel ishleyir

useId()

1. her defe yeni ID generate edir

useRef()

1. input ucun ref parametrine deyer yaradir - const inRef = useRef() <input ref={inRef}/>
2. hemcinin bir deyer bir nece defe const-a assign olunmasin deye deyeri enenevi usulla yox const value = 5, const inRef = useRef(5) formasinda yadda saxlamaq olar. Bu zaman her defe funksiya ishleyende yeniden eyni deyer assign olunmayib sureti azaltmayacaq.
3. 2-ci variantda deyer menimsetdiyimiz zaman sonra o deyeri deyishmek ucun inRef.current = true olaraq deyishirk, bu zaman deyer deyishir ancaq sehife yeniden render olunmur.

useMemo()

1. memoization-in esas mahiyyeti bir emeliyyati sehife acilanda run eleyib daha sonra yaddasha yazmasidi, artiq novbeti defelerde bu emeliyyat onun yaddashinda oldugu ucun yalniz onun dependencysinde olan element cagrilanda agir ishleyecek, diger butun hallarda surete tesir etmeyecek.
2. esasen mehsullarin filter olunmasi zamani performansa musbet tesir edir. diger state-ler deyishen zaman filterin tezden ishlememsi ucun search-u useMemo-da yaziriq.

useCallback()

1. useMemo ile eyni ishleri gorur, yegane ferqi deyer yox, funksiya geri donush elemesidir.

Custom Hook

1. custom hook-lar ozumuzun ish prosesinde yaratdigimiz hook-lardir. fayldaki CustomHook faylinda numune hook+ yardilib.
