import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, EyeOff, Lock, Database, Info, FolderOpen, Bell, ArrowLeft, Heart } from 'lucide-react';
import { s2t } from '../utils/lang';

export default function PrivacyPolicy({ lang }) {
  const convertTextNode = (node) => {
    if (typeof node === 'string') {
      return s2t(node, lang);
    }
    if (Array.isArray(node)) {
      return node.map(convertTextNode);
    }
    if (React.isValidElement(node)) {
      if (node.props && node.props.children) {
        return React.cloneElement(node, {
          children: React.Children.map(node.props.children, convertTextNode)
        });
      }
    }
    return node;
  };

  const isEn = lang === 'en';

  const zhContent = (
    <div className="py-12 sm:py-20 bg-[#FCFBF9] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        
        {/* main card container */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-10 md:p-12 text-left relative overflow-hidden">
          
          {/* Lavender accent decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#7D6EAD]" />
          <div className="absolute top-6 right-6 opacity-5 text-[#7D6EAD] pointer-events-none">
            <ShieldCheck className="w-32 h-32" />
          </div>

          <div className="space-y-8">
            
            {/* Page Header */}
            <div className="border-b border-gray-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7D6EAD] bg-[#7D6EAD]/5 px-3 py-1 rounded-full">
                PRIVACY POLICY
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 tracking-tight">
                隐私政策
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-400">
                <span className="font-medium text-[#5B4B8A]">时光收藏夹 (Tivora)</span>
                <span>•</span>
                <span>更新日期：2026-07-06</span>
              </div>
            </div>

            {/* Core commitment banner */}
            <div className="bg-[#7D6EAD]/5 rounded-2xl p-5 border border-[#7D6EAD]/10 flex gap-4">
              <div className="p-2.5 bg-[#7D6EAD]/10 rounded-xl text-[#7D6EAD] shrink-0 self-start">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-sm font-bold text-[#5B4B8A]">核心承诺：完全离线运行</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                  时光收藏夹（Tivora）是一款完全离线运行的本地应用。我们不会收集、上传、存储或分享您的任何个人数据到任何远程服务器。您的一切数据都保存在您自己的设备中，由您完全掌控。
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
              
              {/* Section 1 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">1</span>
                  我们是谁
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  时光收藏夹（Tivora）是一款完全离线运行的个人生活管理工具。开发者不运营任何后端服务器，不提供云同步服务，也不使用任何第三方分析 or 追踪工具。
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">2</span>
                  我们收集哪些数据
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify mb-2">
                  时光收藏夹不收集任何数据——所有数据均由您主动输入并存储在您的设备本地。我们无法访问 these 数据，也无法将其传输至任何外部服务器。
                </p>
                <div className="pl-7 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100/55">
                    <span className="text-xs font-bold text-gray-700 block mb-1">✍️ 您主动创建的内容</span>
                    <p className="text-[11px] text-gray-500 leading-relaxed">您在应用中创建的所有业务数据均存储在您的设备本地 SQLite 数据库中，由您完全掌控。</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100/55">
                    <span className="text-xs font-bold text-gray-700 block mb-1">⚙️ 应用配置数据</span>
                    <p className="text-[11px] text-gray-500 leading-relaxed">所有配置数据（语言偏好、币种设置、提醒天数、密码哈希、自定义类别、预算配置等）均存储在您的设备本地 AsyncStorage 中，密码经 SHA-256 哈希处理，不以明文保存。</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">3</span>
                  数据存储在哪里
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  所有数据仅存储在您的设备本地：
                </p>
                <ul className="pl-11 list-disc text-xs sm:text-sm text-gray-500 space-y-1">
                  <li>您创建的所有结构化数据存储在设备的本地 SQLite 数据库中</li>
                  <li>配置数据（设置偏好、密码哈希等）存储在设备的本地 AsyncStorage 中</li>
                  <li>图片附件存储在应用的文件系统缓存目录中</li>
                </ul>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify pt-1">
                  这些数据均位于应用沙盒内，其他应用无法访问。当您卸载应用时，这些数据将被操作系统一并删除。
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">4</span>
                  数据如何被使用
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  您的数据仅用于在应用内为您提供功能服务，包括：
                </p>
                <ul className="pl-11 list-disc text-xs sm:text-sm text-gray-500 space-y-1">
                  <li>展示您在各模块中记录的所有数据</li>
                  <li>计算统计信息（日均成本、收支趋势、倒数日等）</li>
                  <li>在您设定的时间发送本地提醒通知</li>
                  <li>根据您的密码验证私密日记的访问权限</li>
                  <li>按您选择的格式导出数据为 Excel 文件</li>
                </ul>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify pt-1">
                  所有数据处理均在您的设备上完成，不涉及任何远程计算或云端处理。
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">5</span>
                  数据是否被分享
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  不。我们不会将您的任何数据分享给任何第三方，原因很简单：我们根本没有能力访问您的数据。您的数据从未离开您的设备。
                </p>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify pt-1 bg-yellow-50/50 p-3 rounded-xl border border-yellow-100">
                  <span className="font-bold text-yellow-800 block mb-0.5">💡 唯一例外</span>
                  是您主动使用系统分享功能（如导出 Excel 文件后通过系统分享面板发送），此操作由您完全控制，且由操作系统提供的分享机制完成，应用本身不参与数据传输。
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">6</span>
                  应用权限说明
                </h3>
                <div className="pl-7 grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white border border-gray-100 rounded-xl flex gap-2.5">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0 self-start">
                      <FolderOpen className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-gray-800 block mb-0.5">📷 相机（Camera）</span>
                      <p className="text-gray-500 leading-relaxed">用于为物品、账单、日记、计划拍摄照片附件。照片仅存储在您的设备本地，不会上传至任何服务器。</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-gray-100 rounded-xl flex gap-2.5">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600 shrink-0 self-start">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-gray-800 block mb-0.5">🖼️ 相册/媒体库（Photo Library）</span>
                      <p className="text-gray-500 leading-relaxed">用于从相册中选择已有照片作为附件。与相机权限一样，选中的照片仅存储在本地。</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-gray-100 rounded-xl flex gap-2.5">
                    <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600 shrink-0 self-start">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-gray-800 block mb-0.5">🔔 通知（Notifications）</span>
                      <p className="text-gray-500 leading-relaxed">用于在您设定的提醒时间发送本地通知（如物品到期提醒、日程开始提醒、重要日子提醒）。所有通知均由设备本地调度，不经过任何远程推送服务。</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-gray-100 rounded-xl flex gap-2.5">
                    <div className="p-2 bg-green-50 rounded-lg text-green-600 shrink-0 self-start">
                      <Database className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-gray-800 block mb-0.5">💾 文件系统（File System）</span>
                      <p className="text-gray-500 leading-relaxed">用于存储图片附件和导出 Excel 文件。仅访问应用自身的沙盒目录，不会读取其他文件。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">7</span>
                  数据安全
                </h3>
                <ul className="pl-11 list-disc text-xs sm:text-sm text-gray-500 space-y-1">
                  <li><span className="font-bold text-gray-700">私密密码保护：</span>您可以为日记设置私密密码。密码经 SHA-256 加密哈希后存储，不保存明文。查看私密日记前需验证密码。</li>
                  <li><span className="font-bold text-gray-700">本地存储：</span>所有数据存储在应用沙盒内，受操作系统安全机制保护，其他应用无法访问。</li>
                  <li><span className="font-bold text-gray-700">无网络传输：</span>应用不发起任何网络请求，数据不存在网络传输中被截获的风险。</li>
                </ul>
                <p className="pl-7 text-xs sm:text-sm text-gray-400 text-justify pt-1">
                  请注意，设备本身的安全性（如屏幕锁定、设备加密）由您自行管理，我们建议您为设备设置强密码或生物识别锁。
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">8</span>
                  您的权利
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify mb-2">
                  由于所有数据都在您的设备本地，您可以直接行使以下权利，无需联系开发者：
                </p>
                <div className="pl-7 grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-[#FAF8F5] p-3 rounded-xl text-center border border-gray-100">
                    <span className="text-xs font-bold text-[#5B4B8A] block">🔍 访问权</span>
                    <span className="text-[10px] text-gray-400 block mt-1">随时查看数据</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 rounded-xl text-center border border-gray-100">
                    <span className="text-xs font-bold text-[#5B4B8A] block">📤 导出权</span>
                    <span className="text-[10px] text-gray-400 block mt-1">导出为 Excel</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 rounded-xl text-center border border-gray-100">
                    <span className="text-xs font-bold text-[#5B4B8A] block">❌ 删除权</span>
                    <span className="text-[10px] text-gray-400 block mt-1">一键重置本地数据</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 rounded-xl text-center border border-gray-100">
                    <span className="text-xs font-bold text-[#5B4B8A] block">⚙️ 控制权</span>
                    <span className="text-[10px] text-gray-400 block mt-1">随时撤销系统权限</span>
                  </div>
                </div>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify pt-2">
                  如您有任何疑问，可以通过应用商店页面提供的联系方式与我们取得联系。
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">9</span>
                  儿童隐私
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  时光收藏夹不收集任何用户的个人数据，因此也不存在收集儿童数据的问题。我们建议 13 岁以下的儿童在监护人指导下使用本应用。
                </p>
              </div>

              {/* Section 10 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">10</span>
                  隐私政策更新
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  我们可能会不时更新本隐私政策。更新后的政策将在应用内发布，并在顶部标注更新日期。由于应用不连接网络，我们不会通过推送通知告知您政策变更，建议您定期查看本页面。
                </p>
              </div>

              {/* Section 11 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">11</span>
                  联系我们
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  • 通过应用商店（App Store / Google Play）的开发者联系方式。
                </p>
              </div>

            </div>

          </div>

          {/* Footer of the policy page */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-400 font-mono">EST. 2026 — TIVORA SAFETY ASSURED</span>
            <span className="text-[#7D6EAD] text-xs font-semibold flex items-center gap-1">
              <span>✿ 时光收藏夹团队 敬制</span>
            </span>
          </div>

        </div>

      </div>
    </div>
  );

  const enContent = (
    <div className="py-12 sm:py-20 bg-[#FCFBF9] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        
        {/* main card container */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-10 md:p-12 text-left relative overflow-hidden">
          
          {/* Lavender accent decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#7D6EAD]" />
          <div className="absolute top-6 right-6 opacity-5 text-[#7D6EAD] pointer-events-none">
            <ShieldCheck className="w-32 h-32" />
          </div>

          <div className="space-y-8">
            
            {/* Page Header */}
            <div className="border-b border-gray-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7D6EAD] bg-[#7D6EAD]/5 px-3 py-1 rounded-full">
                PRIVACY POLICY
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 tracking-tight">
                Privacy Policy
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-400">
                <span className="font-medium text-[#5B4B8A]">Tivora</span>
                <span>•</span>
                <span>Last Updated: 2026-07-06</span>
              </div>
            </div>

            {/* Core commitment banner */}
            <div className="bg-[#7D6EAD]/5 rounded-2xl p-5 border border-[#7D6EAD]/10 flex gap-4">
              <div className="p-2.5 bg-[#7D6EAD]/10 rounded-xl text-[#7D6EAD] shrink-0 self-start">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-sm font-bold text-[#5B4B8A]">Core Commitment: Fully Offline Operation</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                  Tivora is a completely offline local application. We do not collect, upload, store, or share any of your personal data to any remote servers. All your data is saved on your own device, fully under your control.
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
              
              {/* Section 1 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">1</span>
                  Who We Are
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  Tivora is a fully offline personal life management tool. The developer does not operate any backend servers, provide cloud synchronization services, or use any third-party analysis or tracking tools.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">2</span>
                  What Data We Collect
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify mb-2">
                  Tivora does not collect any data—all data is actively entered by you and stored locally on your device. We cannot access this data, nor can we transfer it to any external servers.
                </p>
                <div className="pl-7 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100/55">
                    <span className="text-xs font-bold text-gray-700 block mb-1">✍️ Content You Actively Create</span>
                    <p className="text-[11px] text-gray-500 leading-relaxed">All business data you create in the app is stored in your device's local SQLite database, fully controlled by you.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100/55">
                    <span className="text-xs font-bold text-gray-700 block mb-1">⚙️ App Configuration Data</span>
                    <p className="text-[11px] text-gray-500 leading-relaxed">All configuration data (language preferences, currency settings, reminder days, password hashes, custom categories, budget configurations, etc.) are stored in your device's local AsyncStorage. Passwords are hashed via SHA-256 and not saved in plaintext.</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">3</span>
                  Where Data is Stored
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  All data is stored only locally on your device:
                </p>
                <ul className="pl-11 list-disc text-xs sm:text-sm text-gray-500 space-y-1">
                  <li>All structured data you create is stored in the device's local SQLite database</li>
                  <li>Configuration data (settings preferences, password hashes, etc.) are stored in the device's local AsyncStorage</li>
                  <li>Image attachments are stored in the app's filesystem cache directory</li>
                </ul>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify pt-1">
                  These data are located within the app sandbox and cannot be accessed by other apps. When you uninstall the app, this data will be deleted by the operating system.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">4</span>
                  How Data is Used
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  Your data is only used to provide functional services within the app, including:
                </p>
                <ul className="pl-11 list-disc text-xs sm:text-sm text-gray-500 space-y-1">
                  <li>Displaying all data you recorded in each module</li>
                  <li>Calculating statistical information (average daily costs, income and expense trends, countdowns, etc.)</li>
                  <li>Sending local reminder notifications at your scheduled times</li>
                  <li>Verifying access permissions for private diaries based on your password</li>
                  <li>Exporting data as Excel files in your selected format</li>
                </ul>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify pt-1">
                  All data processing is completed on your device, involving no remote computation or cloud processing.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">5</span>
                  Is Data Shared
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  No. We do not share any of your data with any third party for a simple reason: we have absolutely no ability to access your data. Your data never leaves your device.
                </p>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify pt-1 bg-yellow-50/50 p-3 rounded-xl border border-yellow-100">
                  <span className="font-bold text-yellow-800 block mb-0.5">💡 The Only Exception</span>
                  is when you actively use the system sharing feature (such as sending an exported Excel file via the system share sheet). This operation is fully controlled by you and completed through the sharing mechanism provided by the operating system; the app itself does not participate in data transmission.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">6</span>
                  App Permissions Explanation
                </h3>
                <div className="pl-7 grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white border border-gray-100 rounded-xl flex gap-2.5">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0 self-start">
                      <FolderOpen className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-gray-800 block mb-0.5">📷 Camera</span>
                      <p className="text-gray-500 leading-relaxed">Used to take photo attachments for items, bills, diaries, and plans. Photos are only stored locally on your device and will not be uploaded to any server.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-gray-100 rounded-xl flex gap-2.5">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600 shrink-0 self-start">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-gray-800 block mb-0.5">🖼️ Photo Library</span>
                      <p className="text-gray-500 leading-relaxed">Used to select existing photos from the album as attachments. Similar to camera permissions, selected photos are only stored locally.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-gray-100 rounded-xl flex gap-2.5">
                    <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600 shrink-0 self-start">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-gray-800 block mb-0.5">🔔 Notifications</span>
                      <p className="text-gray-500 leading-relaxed">Used to send local notifications at your scheduled reminder times (such as item expiration reminders, schedule start reminders, important date reminders). All notifications are scheduled locally by the device and do not go through any remote push services.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-gray-100 rounded-xl flex gap-2.5">
                    <div className="p-2 bg-green-50 rounded-lg text-green-600 shrink-0 self-start">
                      <Database className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-gray-800 block mb-0.5">💾 File System</span>
                      <p className="text-gray-500 leading-relaxed">Used to store image attachments and export Excel files. It only accesses the app's own sandbox directory and does not read other files.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">7</span>
                  Data Security
                </h3>
                <ul className="pl-11 list-disc text-xs sm:text-sm text-gray-500 space-y-1">
                  <li><span className="font-bold text-gray-700">Private Password Protection:</span> You can set a private password for your diaries. The password is stored after SHA-256 encryption hashing, and no plaintext is saved. Password verification is required before viewing private diaries.</li>
                  <li><span className="font-bold text-gray-700">Local Storage:</span> All data is stored inside the app sandbox, protected by the operating system's security mechanisms, and inaccessible to other apps.</li>
                  <li><span className="font-bold text-gray-700">No Network Transmission:</span> The app does not initiate any network requests, eliminating the risk of data interception during network transmission.</li>
                </ul>
                <p className="pl-7 text-xs sm:text-sm text-gray-400 text-justify pt-1">
                  Please note that the security of the device itself (such as screen locks and device encryption) is managed by you. We recommend setting a strong password or biometric lock for your device.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">8</span>
                  Your Rights
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify mb-2">
                  Since all data is stored locally on your device, you can directly exercise the following rights without contacting the developer:
                </p>
                <div className="pl-7 grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-[#FAF8F5] p-3 rounded-xl text-center border border-gray-100">
                    <span className="text-xs font-bold text-[#5B4B8A] block">🔍 Access</span>
                    <span className="text-[10px] text-gray-400 block mt-1">View your data at any time</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 rounded-xl text-center border border-gray-100">
                    <span className="text-xs font-bold text-[#5B4B8A] block">📤 Export</span>
                    <span className="text-[10px] text-gray-400 block mt-1">Export as Excel</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 rounded-xl text-center border border-gray-100">
                    <span className="text-xs font-bold text-[#5B4B8A] block">❌ Delete</span>
                    <span className="text-[10px] text-gray-400 block mt-1">Reset local data with one click</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 rounded-xl text-center border border-gray-100">
                    <span className="text-xs font-bold text-[#5B4B8A] block">⚙️ Control</span>
                    <span className="text-[10px] text-gray-400 block mt-1">Revoke system permissions at any time</span>
                  </div>
                </div>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify pt-2">
                  If you have any questions, you can contact us through the developer contact information provided on the app store page.
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">9</span>
                  Children's Privacy
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  Tivora does not collect any personal data of any users, so there is no issue of collecting children's data. We recommend that children under 13 use this application under guardian guidance.
                </p>
              </div>

              {/* Section 10 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">10</span>
                  Privacy Policy Updates
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  We may update this privacy policy from time to time. The updated policy will be published within the app with the update date noted at the top. Since the app is not connected to the internet, we will not notify you of policy changes through push notifications; we recommend checking this page periodically.
                </p>
              </div>

              {/* Section 11 */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-xs bg-gray-100 text-gray-500 w-5 h-5 rounded-md flex items-center justify-center font-mono">11</span>
                  Contact Us
                </h3>
                <p className="pl-7 text-xs sm:text-sm text-gray-500 text-justify">
                  • Through the developer contact information provided in the App Store / Google Play.
                </p>
              </div>

            </div>

          </div>

          {/* Footer of the policy page */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-400 font-mono">EST. 2026 — TIVORA SAFETY ASSURED</span>
            <span className="text-[#7D6EAD] text-xs font-semibold flex items-center gap-1">
              <span>✿ Crafted by Tivora Team</span>
            </span>
          </div>

        </div>

      </div>
    </div>
  );

  return isEn ? enContent : convertTextNode(zhContent);
}
