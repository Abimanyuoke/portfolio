import CustomScrollArea from '../ui/CustomScrollArea';

export default function ScrollbarExamples() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Custom Scrollbar Components
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Scrollbar kustom yang indah dan responsif untuk portfolio Anda
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Default Orange Scrollbar */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Default Orange Theme
                        </h3>
                        <CustomScrollArea
                            maxHeight="300px"
                            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
                        >
                            {[...Array(30)].map((_, i) => (
                                <div key={i} className="p-3 mb-2 bg-white dark:bg-gray-600 rounded-lg shadow-sm">
                                    <h4 className="font-medium text-gray-900 dark:text-white">
                                        Portfolio Project #{i + 1}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        Deskripsi singkat tentang proyek portfolio yang menakjubkan ini.
                                    </p>
                                </div>
                            ))}
                        </CustomScrollArea>
                    </div>

                    {/* Thin Blue Scrollbar */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Thin Blue Variant
                        </h3>
                        <CustomScrollArea
                            variant="thin"
                            color="blue"
                            maxHeight="300px"
                            className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4"
                        >
                            {[...Array(25)].map((_, i) => (
                                <div key={i} className="p-3 mb-2 bg-blue-100 dark:bg-blue-800/30 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-blue-900 dark:text-blue-100">
                                                Skill #{i + 1}
                                            </h4>
                                            <p className="text-sm text-blue-700 dark:text-blue-300">
                                                Keahlian dalam bidang teknologi modern
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CustomScrollArea>
                    </div>

                    {/* Glow Purple Scrollbar */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Glow Purple Effect
                        </h3>
                        <CustomScrollArea
                            variant="glow"
                            color="purple"
                            maxHeight="300px"
                            className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4"
                        >
                            <div className="space-y-4">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-800/40 dark:to-purple-700/40 rounded-lg">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                                                {i + 1}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">
                                                    Experience #{i + 1}
                                                </h4>
                                                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                                                    Pengalaman profesional dalam pengembangan software
                                                </p>
                                                <div className="flex gap-2">
                                                    <span className="px-2 py-1 bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                                                        React
                                                    </span>
                                                    <span className="px-2 py-1 bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                                                        TypeScript
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CustomScrollArea>
                    </div>

                    {/* Horizontal Scrollbar */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Horizontal Green Scroll
                        </h3>
                        <CustomScrollArea
                            variant="thick"
                            color="green"
                            orientation="horizontal"
                            maxWidth="100%"
                            className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4"
                        >
                            <div className="flex gap-4 pb-2" style={{ width: '800px' }}>
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex-shrink-0 w-40 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-4 text-white shadow-lg"
                                    >
                                        <div className="font-bold text-lg mb-2">Tech {i + 1}</div>
                                        <div className="text-sm opacity-90">
                                            Teknologi yang dikuasai dalam pengembangan
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CustomScrollArea>
                    </div>
                </div>

                {/* Auto-hide scrollbar demo */}
                <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                        Auto-hide Red Scrollbar (Hover to show)
                    </h3>
                    <CustomScrollArea
                        color="red"
                        autoHide={true}
                        maxHeight="250px"
                        className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4"
                    >
                        <div className="text-center text-red-600 dark:text-red-400 mb-4 font-medium">
                            Hover area ini untuk melihat scrollbar muncul
                        </div>
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="p-3 mb-2 bg-red-100 dark:bg-red-800/30 rounded-lg">
                                <h4 className="font-medium text-red-900 dark:text-red-100">
                                    Achievement #{i + 1}
                                </h4>
                                <p className="text-sm text-red-700 dark:text-red-300">
                                    Pencapaian luar biasa dalam karir pengembangan software
                                </p>
                            </div>
                        ))}
                    </CustomScrollArea>
                </div>

                {/* Usage Guide */}
                <div className="mt-12 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        📋 Cara Penggunaan
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                Import Component
                            </h3>
                            <code className="block bg-gray-900 text-green-400 p-3 rounded-lg text-sm">
                                {`import CustomScrollArea from '../ui/CustomScrollArea';`}
                            </code>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                Basic Usage
                            </h3>
                            <code className="block bg-gray-900 text-green-400 p-3 rounded-lg text-sm">
                                {`<CustomScrollArea 
  variant="glow"
  color="orange"
  maxHeight="400px"
>
  {/* Your content */}
</CustomScrollArea>`}
                            </code>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            Available Props
                        </h3>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li><strong>variant:</strong> 'default' | 'thin' | 'thick' | 'glow' | 'invisible'</li>
                                <li><strong>color:</strong> 'orange' | 'blue' | 'green' | 'purple' | 'red'</li>
                                <li><strong>autoHide:</strong> boolean - Hide scrollbar until hover</li>
                                <li><strong>orientation:</strong> 'vertical' | 'horizontal' | 'both'</li>
                                <li><strong>maxHeight/maxWidth:</strong> string - CSS dimension values</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}